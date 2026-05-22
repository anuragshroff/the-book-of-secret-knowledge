const fs = require('fs');
const path = require('path');

const readmeFile = path.join(__dirname, '../README.md');
const readme = fs.readFileSync(readmeFile, 'utf-8');

// Extract all section headers and organize by category
const lines = readme.split('\n');
let categories = {};
let currentCat = 'Other';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if it's a category header
  const catMatch = line.match(/##### :black_small_square: ([^\n]+)/);
  if (catMatch) {
    currentCat = catMatch[1].trim();
    if (!categories[currentCat]) {
      categories[currentCat] = [];
    }
  }
  
  // Check if it's a command link
  const linkMatch = line.match(/<a href="([^"]+)"><b>([^<]+)<\/b><\/a>\s*-\s*([^<\n]+)/);
  if (linkMatch) {
    const [, url, name, description] = linkMatch;
    
    if (currentCat && categories[currentCat]) {
      categories[currentCat].push({
        name: name.trim(),
        url: url.trim(),
        description: description.trim()
      });
    }
  }
}

// Generate TypeScript file
let tsContent = `export interface Command {
  name: string
  description: string
  category: string
  tags: string[]
  url?: string
}

export const commands: Command[] = [\n`;

// Flatten and create command objects
const commandsList = [];
for (const [category, cmds] of Object.entries(categories)) {
  for (const cmd of cmds) {
    const tags = [];
    // Add category-based tags
    if (category.toLowerCase().includes('shell')) tags.push('shell');
    if (category.toLowerCase().includes('network')) tags.push('network');
    if (category.toLowerCase().includes('dns')) tags.push('dns');
    if (category.toLowerCase().includes('http')) tags.push('http');
    if (category.toLowerCase().includes('editor')) tags.push('editor');
    if (category.toLowerCase().includes('file')) tags.push('file');
    if (category.toLowerCase().includes('manager')) tags.push('manager');
    if (category.toLowerCase().includes('text')) tags.push('text');
    if (category.toLowerCase().includes('productivity')) tags.push('productivity');
    if (category.toLowerCase().includes('monitoring')) tags.push('monitoring');
    if (category.toLowerCase().includes('system')) tags.push('system');
    if (category.toLowerCase().includes('performance')) tags.push('performance');
    if (category.toLowerCase().includes('proxies')) tags.push('proxy');
    if (category.toLowerCase().includes('vpn')) tags.push('vpn');
    if (category.toLowerCase().includes('ssl')) tags.push('ssl');
    if (category.toLowerCase().includes('tls')) tags.push('tls');
    if (category.toLowerCase().includes('crypto')) tags.push('crypto');
    
    // Add name-based tags
    if (cmd.name.match(/^(curl|wget|lynx)/i)) tags.push('download');
    if (cmd.name.match(/scan|nmap|netstat/i)) tags.push('scanning');
    if (cmd.name.match(/ssh|scp|telnet/i)) tags.push('remote');
    
    commandsList.push({
      name: cmd.name,
      description: cmd.description,
      category: category,
      tags: [...new Set(tags)], // Remove duplicates
      url: cmd.url
    });
  }
}

// Sort by name
commandsList.sort((a, b) => a.name.localeCompare(b.name));

// Write commands to TypeScript
for (const cmd of commandsList) {
  const tagsStr = cmd.tags.map(t => `'${t}'`).join(', ');
  tsContent += `  {
    name: '${cmd.name.replace(/'/g, "\\'")}',
    description: '${cmd.description.replace(/'/g, "\\'")}',
    category: '${cmd.category.replace(/'/g, "\\'")}',
    tags: [${tagsStr}],
    url: '${cmd.url || ''}',
  },\n`;
}

tsContent += `]\n\n`;

// Add helper functions
tsContent += `export const categories = Array.from(new Set(commands.map(cmd => cmd.category))).sort()

export function searchCommands(query: string): Command[] {
  const q = query.toLowerCase()
  return commands.filter(cmd =>
    cmd.name.toLowerCase().includes(q) ||
    cmd.description.toLowerCase().includes(q) ||
    cmd.category.toLowerCase().includes(q) ||
    cmd.tags.some(tag => tag.toLowerCase().includes(q))
  )
}

export function getCommandsByCategory(category: string): Command[] {
  return commands.filter(cmd => cmd.category === category)
}`;

// Write to file
const outputFile = path.join(__dirname, '../lib/commands.ts');
fs.writeFileSync(outputFile, tsContent);

console.log(`✅ Extracted ${commandsList.length} commands from ${Object.keys(categories).length} categories`);
console.log('Categories:', Object.keys(categories).sort().join(', '));
