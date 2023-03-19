{ pkgs, ... }:

{
  env.GREET = "Welcome to Maulana Development Shell!";

  packages = with pkgs; [ nodePackages.yarn nodejs-19_x ];

  scripts.hello.exec = "echo hello from $GREET";

  enterShell = ''
    hello
  '';

  languages.typescript.enable = true;

  pre-commit.hooks.shellcheck.enable = true;

  processes.ping.exec = "ping example.com";
}
