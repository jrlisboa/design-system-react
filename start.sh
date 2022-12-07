#!/bin/bash

RESET=$(tput sgr0)
Yellow='\033[0;33m'
Green='\033[0;32m'
Red='\033[0;31m'

open_link() {
    case "$OSTYPE" in
    darwin*) open $1;;
    linux*) xdg-open $1;;
    msys*) start $1;;
    cygwin*) start $1;;
    esac
}

print_option() {
    printf "\n${Yellow}$1${RESET}\n\n"
}

print_info() {
    printf "\n${Green}$1${RESET}\n\n"
}

printf "\n"
echo -e "+--------+-------------------+--------------------------------------------------------+
|                     🟢 Bem-vindo ao Lemon Design System (React) 🟢                   |
|                       --Explore os componentes e contribua --                       |
+--------+-------------------+--------------------------------------------------------+
| Numero | Comando          | Descrição                                               |
+--------+-------------------+--------------------------------------------------------+
| 1      | run              | Abre uma página de exemplo para os componentes          |
| 2      | tests            | Roda os testes do projeto                               |
+--------+-------------------+--------------------------------------------------------+"

print_option "🤖 [Jr bot] Só me falar o número, e eu preparo tudo pra você."
read option;

example() {
    print_info "🤖 [Jr bot] Boa! Já vou instalar tudo e iniciar pra você..."
    npm install

    print_info "🤖 [Jr bot] Abrindo localhost..."
    open_link http://localhost:1234

    npx parcel ./src/example/index.html
}

tests() {
    print_info "🤖 [Jr bot] Pode deixar! Vou rodar todos os testes..."
    npm install
    npm test -- --coverage

    print_option "🤖 [Jr bot] Gostaria de ver mais detalhes sobre a cobertura? [y/n]"
    read coverage;

    case $coverage in 
    y)
        print_info "🤖 [Jr bot] Estou abrindo uma nova página com a cobertura de testes..."
        open_link coverage/lcov-report/index.html;;
    esac
}

case $option in 
1) example;;
2) tests;;
*) echo -e "${Red}🤖 ❌ Opa! Essa opção não existe.${RESET}";;
esac

