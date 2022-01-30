{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = with pkgs; [
        buildPackages.nodejs-17_x
        buildPackages.yarn
    ];
}
