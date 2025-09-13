# 🏴‍☠️ Decodificador do Tesouro Pirata

Uma aplicação web interativa para decifrar códigos secretos dos piratas dos sete mares! Baseado na lenda antiga que diz que os piratas mais astutos usavam sequências numéricas para proteger suas localizações de tesouro.

## 📖 Sobre o Desafio

O desafio consiste em criar um algoritmo que receba uma sequência de números inteiros e decifre a mensagem dos piratas, retornando as letras correspondentes na frase enigmática: "Libertatem ex tenebris".

## 📋 Regras do Código

Os números de entrada são 1-indexados (1 é a primeira posição)

Cada número corresponde à letra na posição da frase enigmática

Os números podem se repetir

Números fora do intervalo de 1 a 21 são ignorados

A aplicação mostra o cálculo detalhado de cada validação

## 🎯 Como Funciona

Mapeamento da Frase

Posição:  ``1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21``

Letra:    ``L  i  b  e  r  t  a  t  e  m     e  x     t  e  n  e  b  r  i  s``

Frase:   `` "Libertatem ex tenebris" ``

**Exemplos de Uso**

### Entrada: **1, 2, 3, 4, 5**

**Posição 1 →** "L"

**Posição 2 →** "i"

**Posição 3 →** "b"

**Posição 4 →** "e"

**Posição 5 →** "r"

### Saída: **"Liber"**

### Entrada: 7, 5, 8, 12

Posição 7 → "a"

Posição 5 → "r"

Posição 8 → "t"

Posição 12 → "e"

### Saída: "arte"

## 🚀 Funcionalidades

### ⭐ Interface Temática

Design moderno com tema inspirada na obra **One Piece**

Vídeo de fundo em loop (1920x1080)

Container com transparência e blur

Logo personalizado responsivo

## 🎨 Visual e UX

Animações suaves nos botões com efeito "shiny"

Layout responsivo (desktop e mobile)

Container fixo à esquerda em desktop

Background escuro na seção de resultados para melhor legibilidade

## 🧮 Validação Completa

Mostra passo-a-passo detalhado da decodificação

Identifica números válidos e inválidos

Destaque visual para diferentes tipos de validação

Scroll automático para o resultado

## ♿ Acessibilidade

Navegação por teclado (Tab/Enter)

Alto contraste de cores

Labels semânticos

Suporte a screen readers

## 📁 Estrutura do Projeto
```
desafio_292/
├── 📄 index.html          # Estrutura principal da aplicação
├── 🎨 styles.css          # Estilos e animações
├── ⚡ script.js           # Lógica de decodificação
├── 📁 assets/
│   ├── 🖼️ favicon.ico         # Ícone da aplicação
│   ├── 🏴‍☠️ logo.png            # Logo do projeto (1958x2000)
│   ├── 🖼️ favicon.ico         # Ícone da aplicação
│   └── 🎥 background.mp4  # Vídeo de fundo (1920x1080)
└── 📋 README.md           # Este arquivo
```
## 🛠️ Como Usar

1. Clone o Repositório
```
 bash
git clone https://github.com/luizfxdev/desafio_292.git

cd desafio_292
```
4. Adicione os Assets

Coloque seu logo.png na raiz (será redimensionado automaticamente)

Adicione favicon.ico na raiz

Coloque o vídeo background.mp4 na pasta assets/

3. Abra no Navegador
```
bash
# Abra o index.html diretamente ou use um servidor local

```
# ou
```
npx serve .
```
4. Use a Aplicação

Digite números separados por vírgula no input

Clique em "DECIFRAR" para ver o resultado detalhado

Use "RETORNAR" para limpar e tentar novamente

## 💻 Tecnologias Utilizadas

**HTML5:** Estrutura semântica e acessível

**CSS3:** Animações, flexbox, grid e efeitos modernos

**JavaScript ES6+:** Lógica de decodificação e manipulação do DOM

**Google Fonts:** Cormorant Garamond e Lato

## 🎨 Características do Design

Cores Principais

Container: #60BFF5 com transparência

Botões: #FFCE00 (dourado pirata)

Resultado: Background escuro rgba(0,0,0,0.9)

Validação Positiva: #00E676 (verde neon)

Validação Negativa: #FF5252 (vermelho claro)

Efeitos Visuais

Backdrop blur para transparência elegante

Animação "shiny" nos botões

Text-shadow para melhor legibilidade

Box-shadow em camadas para profundidade

## 📱 Responsividade

Desktop (> 768px)

Container fixo à esquerda

Botões lado a lado

Logo em tamanho padrão

Mobile (≤ 768px)

Container centralizado

Botões empilhados verticalmente

Logo reduzido

Espaçamentos otimizados

## 🧪 Testes Automáticos

O script inclui testes automáticos que validam:

Análise da frase enigmática

Verificação de posições específicas

Console logs detalhados para debug

## 🤝 Contribuindo

Fork o projeto

Crie uma branch para sua feature (``git checkout -b feature/AmazingFeature``)

Commit suas mudanças (``git commit -m 'Add some AmazingFeature'``)

Push para a branch (``git push origin feature/AmazingFeature``)

Abra um Pull Request

## 📝 Notas de Desenvolvimento

Limitações Conhecidas

A frase "Libertatem ex tenebris" não contém todas as letras do alfabeto

Alguns exemplos teóricos podem não formar palavras reconhecíveis

Requer navegador moderno com suporte a ES6+

Melhorias Futuras

 Suporte a múltiplas frases enigmáticas
 
 Histórico de decodificações
 
 Exportação de resultados
 
 API para integração externa

## 📄 Licença

Este projeto possui finalidades educacionais e não possui fins lucrativos.

## 🙏 Créditos

Conceito: Baseado no desafio "Decifrando o Código do Tesouro"

Design: Inspirado na estética pirata dos sete mares

Desenvolvimento: Implementação completa com foco em UX/UI

## 🙋‍♂️ Autor: [Luizfxdev](https://www.linkedin.com/in/luizfxdev)

### ⚓ *Navegue pelos sete mares digitais e decifre os códigos mais secretos!* ⚓
