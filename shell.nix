let
  nixpkgs = import (builtins.fetchTarball "https://github.com/NixOS/nixpkgs/archive/21.05.tar.gz") {};
in
with nixpkgs;
let
  pkgs = import ./nixpkgs.json { inherit nixpkgs; };
  nodejs = pkgs.nodejs-18_x;
  npm = pkgs.npm_8_x;
in
stdenv.mkDerivation {
  name = "my-nodejs-app";
  buildInputs = [ nodejs npm ];
  shellHook = ''
    export NODE_PATH="$NODE_PATH:$PWD/node_modules"
  '';
}