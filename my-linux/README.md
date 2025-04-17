# Comprehensive Linux & Unix Command Reference Guide

## Introduction to Unix-like Operating Systems

### Unix, Linux, and Their Evolution

- **Unix**: Original OS developed at Bell Labs in 1969, focusing on modularity and multi-user functionality
- **Linux**: Unix-like kernel developed by Linus Torvalds in 1991; forms the base of many modern distributions
- **BSD**: Berkeley Software Distribution, another Unix derivative (FreeBSD, OpenBSD, NetBSD)
- **macOS**: Built on Darwin, a BSD derivative with proprietary Apple components

### Popular Linux Distributions

**Beginner-Friendly:**

- **Ubuntu**: User-friendly, extensive documentation, large community support
- **Linux Mint**: Built on Ubuntu with more traditional desktop interface
- **Pop!\_OS**: Developer-focused Ubuntu derivative with enhanced hardware support

**Developer-Focused:**

- **Fedora**: Cutting-edge features, close to upstream development
- **Arch Linux**: Rolling release model, highly customizable, extensive package repository
- **Debian**: Extremely stable, foundation for many other distributions

**Lightweight Options:**

- **Lubuntu**: Lightweight Ubuntu variant
- **Xubuntu**: Ubuntu with XFCE desktop environment
- **Alpine Linux**: Minimalist distribution often used in containers

**Enterprise/Server:**

- **Red Hat Enterprise Linux (RHEL)**: Commercial distribution with support
- **CentOS/Rocky Linux/AlmaLinux**: Free enterprise-grade RHEL alternatives
- **Ubuntu Server**: Server variant of Ubuntu

## Core File System Navigation & Management

### Basic File Commands

```bash
ls                   # List files and directories
ls -l                # Long format listing
ls -a                # Show hidden files
ls -lh               # Human-readable file sizes
ls -R                # Recursive listing
cd /path/to/dir      # Change directory
cd ..                # Move up one directory
pwd                  # Print working directory
mkdir dir_name       # Create directory
rmdir dir_name       # Remove empty directory
rm file              # Remove file
rm -r dir            # Remove directory recursively
touch file           # Create or update file timestamp
cp source dest       # Copy file
cp -r source_dir dest_dir  # Copy directory recursively
mv source dest       # Move/rename file or directory
```

### File Finding

```bash
find /path -name "filename"    # Find by name
find /path -type f -name "*.txt"  # Find text files
find /path -type d             # Find directories
find /path -mtime -7           # Files modified in last 7 days
find /path -size +10M          # Files larger than 10MB
locate filename                # Find files using updatedb database
which command                  # Show full path of command
whereis command               # Locate binary, source, and manual for command
```

### File Content Commands

```bash
cat file                # Display file contents
less file               # View file with pagination
head file               # View first 10 lines
tail file               # View last 10 lines
tail -f log_file        # Follow file updates in real-time
grep "pattern" file     # Search for pattern in file
grep -r "pattern" dir   # Recursive search in directory
grep -i "pattern" file  # Case-insensitive search
grep -v "pattern" file  # Show non-matching lines
grep -n "pattern" file  # Show line numbers
```

## Process Management

### Process Listing & Monitoring

```bash
ps                    # Show current user processes
ps aux                # Show all processes in detail
ps -ef                # Full format listing
top                   # Interactive process viewer
htop                  # Enhanced process viewer
pgrep process_name    # Find process ID by name
```

### Process Control

```bash
kill PID              # Terminate process by ID
kill -9 PID           # Force terminate process
killall process_name  # Terminate all processes by name
pkill pattern         # Kill processes matching pattern
nice -n 10 command    # Run command with altered priority
renice +10 -p PID     # Change priority of running process
```

### Background Processes

```bash
command &             # Run command in background
nohup command &       # Run command immune to hangups
screen                # Terminal multiplexer
tmux                  # Terminal multiplexer (alternative)
jobs                  # List background jobs
fg %jobnumber         # Bring job to foreground
bg %jobnumber         # Continue job in background
disown %jobnumber     # Detach job from terminal
```

## Shortcuts & Links

### Creating File Shortcuts

```bash
ln -s /path/to/original /path/to/link  # Create symbolic link
ln /path/to/original /path/to/link     # Create hard link
```

### Creating Command Shortcuts

```bash
# Add to ~/.bashrc or ~/.bash_profile:
alias ll='ls -la'
alias update='sudo apt update && sudo apt upgrade'

# Function example:
function mkcd() { mkdir -p "$1" && cd "$1"; }
```

## System File Locations

### Important Directories

```
/bin/       # Essential command binaries
/sbin/      # System binaries
/etc/       # System configuration files
/lib/       # Essential shared libraries
/usr/       # User utilities and applications
/usr/bin/   # Non-essential command binaries
/usr/local/ # Locally installed software
/var/       # Variable data (logs, temp files)
/var/log/   # System logs
/tmp/       # Temporary files
/proc/      # Virtual filesystem for process info
/dev/       # Device files
/mnt/       # Mount point for filesystems
/media/     # Mount point for removable media
```

### User Directories

```
/home/      # User home directories
~           # Current user's home directory
~/.config/  # User application configurations
~/.local/   # User-specific data
~/.cache/   # User application cache data
```

### Configuration Files

```
/etc/passwd        # User account information
/etc/shadow        # Encrypted passwords
/etc/group         # Group definitions
/etc/fstab         # Filesystem table
/etc/hosts         # Host name mappings
/etc/resolv.conf   # DNS resolver configuration
/etc/sudoers       # sudo configuration
~/.bashrc          # User bash configuration
~/.bash_profile    # Login shell configuration
~/.bash_history    # Command history
```

## Environment Variables

### Viewing Environment

```bash
env                    # Display all environment variables
echo $VARIABLE_NAME    # Display specific variable
printenv               # Alternative to env
```

### Common Environment Variables

```
$HOME       # User's home directory
$PATH       # Executable search path
$USER       # Current username
$SHELL      # Path to current shell
$LANG       # Current language/locale
$PWD        # Current working directory
$TERM       # Terminal type
$EDITOR     # Default text editor
$DISPLAY    # X display name
$LD_LIBRARY_PATH  # Library search path
```

### Setting Environment Variables

```bash
# Temporary (current session)
export VAR=value

# Permanent (add to ~/.bashrc, ~/.bash_profile, or /etc/environment)
echo 'export VAR=value' >> ~/.bashrc
source ~/.bashrc  # Apply changes to current session
```

### Modifying PATH Variable

```bash
# Add directory to PATH
export PATH=$PATH:/new/directory

# Add to start of PATH (higher priority)
export PATH=/new/directory:$PATH
```

## Software Installation & Management

### Package Managers

**Debian/Ubuntu (APT):**

```bash
apt update                # Update package lists
apt upgrade               # Upgrade installed packages
apt install package       # Install package
apt remove package        # Remove package
apt search keyword        # Search for packages
apt show package          # Show package details
dpkg -i package.deb       # Install local .deb file
```

**Red Hat/Fedora (DNF/YUM):**

```bash
dnf update                # Update package lists and upgrade
dnf install package       # Install package
dnf remove package        # Remove package
dnf search keyword        # Search for packages
dnf info package          # Show package details
rpm -i package.rpm        # Install local .rpm file
```

**Arch Linux (Pacman):**

```bash
pacman -Syu               # Update package database and upgrade
pacman -S package         # Install package
pacman -R package         # Remove package
pacman -Ss keyword        # Search for packages
pacman -Qi package        # Show package details
```

### Building from Source

```bash
# General pattern:
./configure
make
sudo make install

# Clone and build Git repository:
git clone https://github.com/user/repo.git
cd repo
mkdir build && cd build
cmake ..
make
sudo make install
```

### Installing from Scripts

```bash
# Make script executable
chmod +x script.sh

# Run installer
./script.sh
# or
bash script.sh
```

## Text Processing & Manipulation

### Text Editors

```bash
nano file.txt         # Simple editor
vim file.txt          # Vi improved editor
emacs file.txt        # Extensible editor
gedit file.txt        # GNOME GUI editor
code file.txt         # Visual Studio Code (if installed)
```

### Text Processing Commands

```bash
cat file1 file2       # Concatenate files
cut -d',' -f1,3 file  # Extract columns 1 and 3 from CSV
sort file             # Sort lines alphabetically
sort -n file          # Sort numerically
sort -r file          # Sort in reverse
uniq file             # Remove duplicate adjacent lines
uniq -c file          # Count occurrences of lines
wc file               # Count lines, words, characters
wc -l file            # Count lines only
```

### Text Stream Manipulation

```bash
sed 's/old/new/g' file            # Replace text
sed -i 's/old/new/g' file         # Replace in-place
sed -n '10,20p' file              # Print lines 10-20
awk '{print $1, $3}' file         # Print columns 1 and 3
awk -F, '{print $1}' file.csv     # Use comma as delimiter
tr 'a-z' 'A-Z' < file            # Convert to uppercase
paste file1 file2                 # Merge files side by side
join file1 file2                  # Join files on common field
```

## Networking

### Network Configuration

```bash
ifconfig                      # Show network interfaces (deprecated)
ip addr                       # Show IP addresses
ip link                       # Show network interfaces
iwconfig                      # Show wireless interfaces
nmcli                         # NetworkManager command-line tool
nmtui                         # NetworkManager text interface
```

### Network Diagnostics

```bash
ping host                     # Test connectivity
traceroute host               # Trace packet route
dig domain                    # DNS lookup
nslookup domain               # Alternative DNS lookup
whois domain                  # Domain registration info
ss -tuln                      # Show listening ports
netstat -tuln                 # Show listening ports (older)
nmap host                     # Port scanning (if installed)
```

### Network Transfers

```bash
wget url                      # Download file
curl url                      # Get content from URL
curl -O url                   # Download file with original name
scp file user@host:/path      # Secure copy to remote
rsync -av source/ dest/       # Synchronize directories
```

### SSH

```bash
ssh user@host                 # Connect to remote host
ssh -p port user@host         # Connect using specific port
ssh-keygen                    # Generate SSH key pair
ssh-copy-id user@host         # Copy SSH key to remote host
ssh-agent                     # Manage SSH keys
ssh-add ~/.ssh/id_rsa         # Add key to SSH agent
```

## Disk Management

### Disk Usage

```bash
df -h                      # Show disk space usage
du -h file_or_dir          # Show file/directory size
du -sh dir                 # Summary of directory size
ncdu                       # Interactive disk usage analyzer
```

### Disk Partitioning

```bash
fdisk -l                   # List disk partitions
fdisk /dev/sdX             # Partition disk
parted -l                  # List partitions (alternative)
lsblk                      # List block devices
```

### Mounting File Systems

```bash
mount /dev/sdX1 /mnt       # Mount partition
umount /mnt                # Unmount
mount -a                   # Mount all in fstab
```

### File System Management

```bash
mkfs.ext4 /dev/sdX1        # Format as ext4
mkfs.xfs /dev/sdX1         # Format as XFS
fsck /dev/sdX1             # Check filesystem
badblocks /dev/sdX1        # Check for bad blocks
```

## System Information & Monitoring

### System Info

```bash
uname -a                   # Kernel info
cat /etc/os-release        # OS info
lsb_release -a             # Distribution info
hostname                   # System hostname
uptime                     # System uptime
dmesg                      # Kernel messages
free -h                    # Memory usage
```

### Hardware Info

```bash
lscpu                      # CPU info
lspci                      # PCI devices
lsusb                      # USB devices
lshw                       # Hardware configuration
dmidecode                  # DMI/SMBIOS info
inxi -F                    # System info (if installed)
```

### System Monitoring

```bash
top                        # Process monitor
htop                       # Enhanced process monitor
glances                    # System monitor (if installed)
iotop                      # I/O monitor
vmstat                     # Virtual memory statistics
iostat                     # I/O statistics
sar                        # System activity reporter
```

### Log Viewing

```bash
journalctl                 # View systemd logs
journalctl -u service      # View specific service logs
journalctl -f              # Follow logs
less /var/log/syslog       # Traditional system log
```

## User Management

### User Commands

```bash
whoami                     # Current username
id                         # User and group IDs
users                      # Logged-in users
w                          # Who is logged in and what they're doing
who                        # Show logged in users
last                       # Recent logins
finger user                # User info
```

### User Administration

```bash
sudo command               # Run command as superuser
su - username              # Switch user
useradd username           # Create user
userdel username           # Delete user
usermod -options username  # Modify user
passwd username            # Change password
chage -l username          # Password expiry info
```

### Group Administration

```bash
groupadd groupname         # Create group
groupdel groupname         # Delete group
usermod -aG group user     # Add user to group
groups user                # Show user's groups
```

### Permissions

```bash
chmod permissions file     # Change file permissions
chmod u+x file             # Add execute for user
chmod -R permissions dir   # Recursive permission change
chown user:group file      # Change file owner and group
chgrp group file           # Change file group
```

## Using Windows Apps in Linux

### Wine (Windows Compatibility Layer)

```bash
# Install Wine
sudo apt install wine      # Debian/Ubuntu
sudo dnf install wine      # Fedora
sudo pacman -S wine        # Arch Linux

# Run Windows programs
wine program.exe
winecfg                    # Configure Wine
winetricks                 # Install common components
```

### Windows Subsystem for Linux (WSL)

- Reverse scenario: Run Linux on Windows
- Install from Microsoft Store or via PowerShell
- Access Windows files from /mnt/c

### Alternative Compatibility Options

- **PlayOnLinux**: Frontend for Wine with pre-configured applications
- **Lutris**: Gaming platform with Wine integration
- **Proton**: Valve's modified Wine for Steam
- **CrossOver**: Commercial Wine-based compatibility layer
- **Virtual machines**: Run Windows inside Linux using VirtualBox, QEMU, or VMware

## Automation & Scripting

### Shell Scripting Basics

```bash
#!/bin/bash                 # Shebang line
# Comment
echo "Hello World"          # Print to console
var="value"                 # Variable assignment
echo $var                   # Variable usage
read -p "Prompt: " var      # User input
```

### Control Structures

```bash
# Conditional
if [ condition ]; then
    command
elif [ condition ]; then
    command
else
    command
fi

# Looping
for i in {1..5}; do
    echo $i
done

while [ condition ]; do
    command
done
```

### Cron Jobs (Scheduled Tasks)

```bash
crontab -l                  # List current user's cron jobs
crontab -e                  # Edit cron jobs

# Format: minute hour day month weekday command
# Example: Run at 2:30am every day
30 2 * * * /path/to/script.sh
```

### Task Automation

```bash
at 2:30 tomorrow            # Schedule one-time task
anacron                     # Run missed scheduled tasks
systemd-run --on-calendar="Sat,Sun 20:00" command  # Systemd timer
watch -n 5 command          # Run command every 5 seconds
```

## Security & Encryption

### File Encryption

```bash
gpg -c file                 # Encrypt file with password
gpg file.gpg                # Decrypt file
openssl enc -aes-256-cbc -in file -out file.enc  # OpenSSL encryption
openssl enc -d -aes-256-cbc -in file.enc -out file  # OpenSSL decryption
```

### File Integrity

```bash
md5sum file                 # MD5 checksum
sha256sum file              # SHA-256 checksum
sha512sum file              # SHA-512 checksum
```

### Access Control

```bash
sudo                        # Execute as superuser
visudo                      # Edit sudoers file
su                          # Switch user
ulimit -a                   # Show resource limits
chattr +i file              # Make file immutable
```

### Firewall Management

```bash
ufw status                  # Ubuntu firewall status
ufw enable                  # Enable firewall
ufw allow 22/tcp            # Allow SSH
iptables -L                 # List firewall rules
firewall-cmd --list-all     # Firewalld status (RHEL/Fedora)
```

## Container & Virtualization

### Docker

```bash
docker pull image           # Download image
docker run image            # Run container
docker ps                   # List running containers
docker build -t name .      # Build image from Dockerfile
docker-compose up           # Start services from docker-compose.yml
```

### Podman (Docker alternative)

```bash
podman pull image           # Download image
podman run image            # Run container
podman ps                   # List running containers
```

### Virtual Machines

```bash
virsh list                  # List VMs (libvirt)
virt-install               # Create VM
qemu-system-x86_64         # QEMU VM
```

## Development Tools

### Version Control

```bash
# Git
git init                    # Initialize repository
git clone url               # Clone repository
git add file                # Stage file
git commit -m "message"     # Commit changes
git pull                    # Fetch and merge changes
git push                    # Push changes to remote
```

### Compilers & Interpreters

```bash
gcc source.c -o output      # Compile C program
g++ source.cpp -o output    # Compile C++ program
make                        # Build using Makefile
python script.py            # Run Python script
javac Class.java            # Compile Java
java Class                  # Run Java program
```

### Debugging

```bash
gdb program                 # GNU debugger
valgrind program            # Memory checker
strace command              # Trace system calls
ltrace command              # Trace library calls
```

### Build Tools

```bash
make                        # Run Makefile targets
cmake                       # Cross-platform build system
ninja                       # Fast build system
automake                    # Generate Makefiles
```

## Advanced Features

### System Services

```bash
systemctl status service    # Check service status
systemctl start service     # Start service
systemctl stop service      # Stop service
systemctl enable service    # Enable at boot
systemctl disable service   # Disable at boot
service name status         # Traditional service control
```

### System Boot

```bash
dmesg                       # Boot messages
journalctl -b               # Boot log
grub-mkconfig               # Update GRUB config
update-grub                # Update GRUB (Ubuntu/Debian)
```

### Performance Tuning

```bash
nice -n 10 command          # Run with lower priority
renice +10 -p PID           # Change running process priority
ionice -c 2 -n 7 command    # I/O scheduling priority
sysctl -a                   # Show kernel parameters
sysctl -w param=value       # Set kernel parameter
```

### Advanced Shell Features

```bash
command > file              # Redirect stdout to file
command >> file             # Append stdout to file
command 2> file             # Redirect stderr to file
command &> file             # Redirect both stdout and stderr
command | another_command   # Pipe output as input
command && command2         # Run command2 if command succeeds
command || command2         # Run command2 if command fails
```
