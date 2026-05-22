export interface Command {
  name: string;
  description: string;
  category: string;
  url?: string;
  tags: string[];
}

export const commands: Command[] = [
  // Shells
  {
    name: "GNU Bash",
    description: "Is an sh-compatible shell that incorporates useful features from the Korn shell and C shell.",
    category: "Shells",
    url: "https://www.gnu.org/software/bash/",
    tags: ["shell", "scripting", "bash"]
  },
  {
    name: "Zsh",
    description: "Is a shell designed for interactive use, although it is also a powerful scripting language.",
    category: "Shells",
    url: "https://www.zsh.org/",
    tags: ["shell", "scripting", "zsh"]
  },
  {
    name: "tclsh",
    description: "Is a very powerful cross-platform shell, suitable for a huge range of uses.",
    category: "Shells",
    url: "https://tcl-lang.org/",
    tags: ["shell", "cross-platform"]
  },
  {
    name: "bash-it",
    description: "Is a framework for using, developing and maintaining shell scripts and custom commands.",
    category: "Shells",
    url: "https://github.com/Bash-it/bash-it",
    tags: ["framework", "bash", "scripting"]
  },
  {
    name: "Oh My ZSH!",
    description: "Is the best framework for managing your Zsh configuration.",
    category: "Shells",
    url: "https://ohmyz.sh/",
    tags: ["framework", "zsh", "configuration"]
  },
  {
    name: "Oh My Fish",
    description: "The Fishshell framework.",
    category: "Shells",
    url: "https://github.com/oh-my-fish/oh-my-fish",
    tags: ["framework", "fish", "shell"]
  },
  {
    name: "Starship",
    description: "The cross-shell prompt written in Rust.",
    category: "Shells",
    url: "https://github.com/starship/starship",
    tags: ["prompt", "rust", "cross-shell"]
  },
  {
    name: "powerlevel10k",
    description: "Is a fast reimplementation of Powerlevel9k ZSH theme.",
    category: "Shells",
    url: "https://github.com/romkatv/powerlevel10k",
    tags: ["theme", "zsh", "prompt"]
  },

  // Shell plugins
  {
    name: "z",
    description: "Tracks the folder you use the most and allow you to jump, without having to type the whole path.",
    category: "Shell Plugins",
    url: "https://github.com/rupa/z",
    tags: ["plugin", "navigation", "productivity"]
  },
  {
    name: "fzf",
    description: "Is a general-purpose command-line fuzzy finder.",
    category: "Shell Plugins",
    url: "https://github.com/junegunn/fzf",
    tags: ["plugin", "fuzzy", "finder"]
  },
  {
    name: "zsh-autosuggestions",
    description: "Fish-like autosuggestions for Zsh.",
    category: "Shell Plugins",
    url: "https://github.com/zsh-users/zsh-autosuggestions",
    tags: ["plugin", "zsh", "suggestions"]
  },
  {
    name: "zsh-syntax-highlighting",
    description: "Fish shell like syntax highlighting for Zsh.",
    category: "Shell Plugins",
    url: "https://github.com/zsh-users/zsh-syntax-highlighting",
    tags: ["plugin", "zsh", "syntax"]
  },

  // Managers
  {
    name: "Midnight Commander",
    description: "Is a visual file manager, licensed under GNU General Public License.",
    category: "Managers",
    url: "https://midnight-commander.org/",
    tags: ["file-manager", "visual"]
  },
  {
    name: "ranger",
    description: "Is a VIM-inspired filemanager for the console.",
    category: "Managers",
    url: "https://github.com/ranger/ranger",
    tags: ["file-manager", "vim", "console"]
  },
  {
    name: "nnn",
    description: "Is a tiny, lightning fast, feature-packed file manager.",
    category: "Managers",
    url: "https://github.com/jarun/nnn",
    tags: ["file-manager", "fast", "lightweight"]
  },
  {
    name: "screen",
    description: "Is a full-screen window manager that multiplexes a physical terminal.",
    category: "Managers",
    url: "https://www.gnu.org/software/screen/",
    tags: ["window-manager", "terminal", "multiplexer"]
  },
  {
    name: "tmux",
    description: "Is a terminal multiplexer, lets you switch easily between several programs in one terminal.",
    category: "Managers",
    url: "https://github.com/tmux/tmux/wiki",
    tags: ["terminal", "multiplexer", "sessions"]
  },

  // Text editors
  {
    name: "vi",
    description: "Is one of the most common text editors on Unix.",
    category: "Text Editors",
    url: "http://ex-vi.sourceforge.net/",
    tags: ["editor", "unix", "modal"]
  },
  {
    name: "vim",
    description: "Is a highly configurable text editor.",
    category: "Text Editors",
    url: "https://www.vim.org/",
    tags: ["editor", "modal", "programming"]
  },
  {
    name: "emacs",
    description: "Is an extensible, customizable, free/libre text editor, and more.",
    category: "Text Editors",
    url: "https://www.gnu.org/software/emacs/",
    tags: ["editor", "extensible", "customizable"]
  },
  {
    name: "micro",
    description: "Is a modern and intuitive terminal-based text editor.",
    category: "Text Editors",
    url: "https://github.com/zyedidia/micro",
    tags: ["editor", "terminal", "modern"]
  },
  {
    name: "neovim",
    description: "Is a free open source, powerful, extensible and usable code editor.",
    category: "Text Editors",
    url: "https://neovim.io/",
    tags: ["editor", "vim", "modern"]
  },
  {
    name: "spacemacs",
    description: "A community-driven Emacs distribution.",
    category: "Text Editors",
    url: "https://www.spacemacs.org/",
    tags: ["editor", "emacs", "distribution"]
  },
  {
    name: "spacevim",
    description: "A community-driven vim distribution.",
    category: "Text Editors",
    url: "https://spacevim.org/",
    tags: ["editor", "vim", "distribution"]
  },

  // Files and directories
  {
    name: "fd",
    description: "Is a simple, fast and user-friendly alternative to find.",
    category: "Files and Directories",
    url: "https://github.com/sharkdp/fd",
    tags: ["file", "search", "fast"]
  },
  {
    name: "ncdu",
    description: "Is an easy to use, fast disk usage analyzer.",
    category: "Files and Directories",
    url: "https://dev.yorhel.nl/ncdu",
    tags: ["disk", "usage", "analyzer"]
  },

  // Network - General
  {
    name: "PuTTY",
    description: "Is an SSH and telnet client, developed originally by Simon Tatham.",
    category: "Network - General",
    url: "https://www.putty.org/",
    tags: ["ssh", "telnet", "client"]
  },
  {
    name: "Mosh",
    description: "Is a SSH wrapper designed to keep a SSH session alive over a volatile connection.",
    category: "Network - General",
    url: "https://mosh.org/",
    tags: ["ssh", "mobile", "connection"]
  },
  {
    name: "nmap",
    description: "Is a free and open source utility for network discovery and security auditing.",
    category: "Network - General",
    url: "https://nmap.org/",
    tags: ["network", "discovery", "security", "scanning"]
  },
  {
    name: "RustScan",
    description: "To find all open ports faster than Nmap.",
    category: "Network - General",
    url: "https://github.com/RustScan/RustScan",
    tags: ["port", "scanning", "rust", "fast"]
  },
  {
    name: "masscan",
    description: "Is the fastest Internet port scanner, spews SYN packets asynchronously.",
    category: "Network - General",
    url: "https://github.com/robertdavidgraham/masscan",
    tags: ["port", "scanner", "fast"]
  },
  {
    name: "hping",
    description: "Is a command-line oriented TCP/IP packet assembler/analyzer.",
    category: "Network - General",
    url: "http://www.hping.org/",
    tags: ["tcp", "ip", "packet", "assembler"]
  },
  {
    name: "mtr",
    description: "Is a tool that combines the functionality of the 'traceroute' and 'ping' programs in a single tool.",
    category: "Network - General",
    url: "https://github.com/traviscross/mtr",
    tags: ["traceroute", "ping", "network", "diagnostics"]
  },
  {
    name: "netcat",
    description: "Utility which reads and writes data across network connections, using the TCP/IP protocol.",
    category: "Network - General",
    url: "http://netcat.sourceforge.net/",
    tags: ["tcp", "ip", "connection"]
  },
  {
    name: "socat",
    description: "Utility which transfers data between two objects.",
    category: "Network - General",
    url: "http://www.dest-unreach.org/socat/",
    tags: ["data", "transfer"]
  },
  {
    name: "tcpdump",
    description: "Is a powerful command-line packet analyzer.",
    category: "Network - General",
    url: "https://www.tcpdump.org/",
    tags: ["packet", "analyzer", "capture"]
  },
  {
    name: "tshark",
    description: "Is a tool that allows us to dump and analyze network traffic (wireshark cli).",
    category: "Network - General",
    url: "https://www.wireshark.org/docs/man-pages/tshark.html",
    tags: ["packet", "analyzer", "wireshark"]
  },
  {
    name: "Termshark",
    description: "Is a simple terminal user-interface for tshark.",
    category: "Network - General",
    url: "https://termshark.io/",
    tags: ["packet", "analyzer", "tui"]
  },
  {
    name: "ngrep",
    description: "Is like GNU grep applied to the network layer.",
    category: "Network - General",
    url: "https://github.com/jpr5/ngrep",
    tags: ["grep", "network", "packet"]
  },

  // Network - DNS
  {
    name: "dnsdiag",
    description: "Is a DNS diagnostics and performance measurement tools.",
    category: "Network - DNS",
    url: "https://github.com/farrokhi/dnsdiag",
    tags: ["dns", "diagnostics", "performance"]
  },
  {
    name: "fierce",
    description: "Is a DNS reconnaissance tool for locating non-contiguous IP space.",
    category: "Network - DNS",
    url: "https://github.com/mschwager/fierce",
    tags: ["dns", "reconnaissance", "subdomain"]
  },
  {
    name: "subfinder",
    description: "Is a subdomain discovery tool that discovers valid subdomains for websites.",
    category: "Network - DNS",
    url: "https://github.com/subfinder/subfinder",
    tags: ["dns", "subdomain", "discovery"]
  },
  {
    name: "sublist3r",
    description: "Is a fast subdomains enumeration tool for penetration testers.",
    category: "Network - DNS",
    url: "https://github.com/aboul3la/Sublist3r",
    tags: ["dns", "subdomain", "enumeration"]
  },
  {
    name: "amass",
    description: "Is tool that obtains subdomain names by scraping data sources, crawling web archives, and more.",
    category: "Network - DNS",
    url: "https://github.com/OWASP/Amass",
    tags: ["dns", "subdomain", "recon"]
  },
  {
    name: "massdns",
    description: "Is a high-performance DNS stub resolver for bulk lookups and reconnaissance.",
    category: "Network - DNS",
    url: "https://github.com/blechschmidt/massdns",
    tags: ["dns", "resolver", "bulk"]
  },
  {
    name: "dnscrypt-proxy 2",
    description: "A flexible DNS proxy, with support for encrypted DNS protocols.",
    category: "Network - DNS",
    url: "https://github.com/jedisct1/dnscrypt-proxy",
    tags: ["dns", "proxy", "encryption"]
  },
  {
    name: "dnstwist",
    description: "Detect typosquatters, phishing attacks, fraud, and brand impersonation.",
    category: "Network - DNS",
    url: "https://github.com/elceef/dnstwist",
    tags: ["dns", "security", "phishing"]
  },

  // Network - HTTP
  {
    name: "curl",
    description: "Is a command line tool and library for transferring data with URLs.",
    category: "Network - HTTP",
    url: "https://curl.haxx.se/",
    tags: ["http", "data", "transfer"]
  },
  {
    name: "HTTPie",
    description: "Is an user-friendly HTTP client.",
    category: "Network - HTTP",
    url: "https://github.com/jakubroztocil/httpie",
    tags: ["http", "client", "friendly"]
  },
  {
    name: "Lynx",
    description: "Is a text browser for the World Wide Web.",
    category: "Network - HTTP",
    url: "https://lynx.browser.org/",
    tags: ["browser", "text", "web"]
  },
  {
    name: "Browsh",
    description: "Is a fully interactive, real-time, and modern text-based browser.",
    category: "Network - HTTP",
    url: "https://github.com/browsh-org/browsh/",
    tags: ["browser", "text", "interactive"]
  },
  {
    name: "wrk",
    description: "Is a modern HTTP benchmarking tool capable of generating significant load.",
    category: "Network - HTTP",
    url: "https://github.com/wg/wrk",
    tags: ["benchmark", "http", "load-test"]
  },
  {
    name: "vegeta",
    description: "Is a constant throughput, correct latency recording variant of wrk.",
    category: "Network - HTTP",
    url: "https://github.com/tsenart/vegeta",
    tags: ["benchmark", "http", "load-test"]
  },
  {
    name: "gobuster",
    description: "Is a free and open source directory/file & DNS busting tool written in Go.",
    category: "Network - HTTP",
    url: "https://github.com/OJ/gobuster",
    tags: ["directory", "busting", "go"]
  },
  {
    name: "Hurl",
    description: "Is a command line tool that runs HTTP requests defined in a simple plain text format.",
    category: "Network - HTTP",
    url: "https://hurl.dev",
    tags: ["http", "testing", "cli"]
  },
]

export const categories = Array.from(new Set(commands.map(cmd => cmd.category))).sort()

export function searchCommands(query: string): Command[] {
  if (!query.trim()) return commands

  const lowerQuery = query.toLowerCase()
  return commands.filter(cmd => {
    return (
      cmd.name.toLowerCase().includes(lowerQuery) ||
      cmd.description.toLowerCase().includes(lowerQuery) ||
      cmd.category.toLowerCase().includes(lowerQuery) ||
      cmd.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  })
}

export function getCommandsByCategory(category: string): Command[] {
  return commands.filter(cmd => cmd.category === category)
}
