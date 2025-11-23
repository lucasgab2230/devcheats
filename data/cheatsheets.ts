
export const cheatsheetsData: Record<string, { title: string; content: string }[]> = {
  "Programação": [
    {
      title: 'Python: Fundamentos',
      content: `
# Variáveis e Tipos de Dados
nome = "Alice"  # string
idade = 30      # integer
altura = 1.75   # float
ativo = True    # boolean
frutas = ["maçã", "banana"] # list
coordenadas = (10, 20)      # tuple
pessoa = {"nome": "Bob", "idade": 25} # dict

# Estruturas de Controle (if/elif/else)
if idade < 18:
    print("Menor de idade")
elif idade >= 18 and idade < 60:
    print("Adulto")
else:
    print("Idoso")

# Loop For
for fruta in frutas:
    print(fruta)

# Funções
def saudacao(nome):
    return f"Olá, {nome}!"

print(saudacao("Carlos"))

# List Comprehensions
quadrados = [x**2 for x in range(1, 6)] # [1, 4, 9, 16, 25]
`,
    },
    {
      title: 'Python: POO e Módulos',
      content: `
# Classes e Objetos
class Cachorro:
    def __init__(self, nome, raca):
        self.nome = nome
        self.raca = raca

    def latir(self):
        return "Au au!"

meu_cachorro = Cachorro("Rex", "Labrador")
print(f"{meu_cachorro.nome} é um {meu_cachorro.raca}.")

# Módulos e Pacotes
# Salve como meu_modulo.py
# def somar(a, b):
#     return a + b

# Em outro arquivo:
# import meu_modulo
# resultado = meu_modulo.somar(5, 3) # resultado é 8

# Ambientes Virtuais (venv)
# python3 -m venv meu_ambiente
# source meu_ambiente/bin/activate  # No Linux/macOS
# meu_ambiente\\Scripts\\activate    # No Windows
# pip install requests
`,
    },
    {
      title: 'Rust: Fundamentos e Ownership',
      content: `
// Função principal
fn main() {
    // Variáveis (imutáveis por padrão)
    let x = 5;
    // Variáveis mutáveis
    let mut y = 10;
    y = 15;

    println!("O valor de x é: {} e y é: {}", x, y);
}

// Ownership (Propriedade)
// s1 "move" seu valor para s2. s1 não é mais válido.
let s1 = String::from("hello");
let s2 = s1; 
// println!("{}", s1); // Isso causaria um erro de compilação!

// Borrowing (Empréstimo)
// A função recebe uma referência a 's', não a propriedade.
fn calcula_tamanho(s: &String) -> usize {
    s.len()
}
let s3 = String::from("world");
let len = calcula_tamanho(&s3);
println!("O tamanho de '{}' é {}.", s3, len);

// Structs
struct Usuario {
    username: String,
    email: String,
    ativo: bool,
}
let user1 = Usuario {
    email: String::from("user@example.com"),
    username: String::from("user123"),
    ativo: true,
};
`,
    },
    {
      title: 'Go: Sintaxe e Concorrência',
      content: `
package main

import (
	"fmt"
	"time"
)

// Função principal
func main() {
	// Declaração de variável
	var a = "inicial"
	b := "curta" // Declaração curta

	fmt.Println(a, b)

	// Loop For
	for i := 0; i < 3; i++ {
		fmt.Println(i)
	}
	
	// Goroutine (execução concorrente)
	go diga("world")
	diga("hello")
}

// Channels (para comunicação entre goroutines)
// c := make(chan string)
// go func() { c <- "ping" }()
// msg := <-c
// fmt.Println(msg)

func diga(s string) {
	for i := 0; i < 3; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}
`,
    },
    {
      title: 'Java: Estrutura e POO',
      content: `
// Todo programa Java precisa de uma classe
public class Main {
    // Método principal - ponto de entrada
    public static void main(String[] args) {
        // Variáveis e tipos primitivos
        String nome = "Java";
        int versao = 17;
        boolean divertido = true;
        System.out.println(nome + " " + versao);
    }
}

// POO: Classes e Objetos
class Carro {
    String modelo;
    int ano;

    // Construtor
    public Carro(String modelo, int ano) {
        this.modelo = modelo;
        this.ano = ano;
    }

    // Método
    public void ligar() {
        System.out.println("O " + modelo + " ligou.");
    }
}
// Criando um objeto
// Carro meuCarro = new Carro("Fusca", 1970);
// meuCarro.ligar();

// ArrayList
// import java.util.ArrayList;
// ArrayList<String> carros = new ArrayList<String>();
// carros.add("Volvo");
// carros.add("BMW");
`,
    },
    {
      title: 'Ruby: Sintaxe e Blocos',
      content: `
# Variáveis e Tipos
nome = "Ruby"
ano = 1995
nomes = ["Matz", "Guido", "Larry"]

# Estruturas de controle
if ano > 2000
  puts "#{nome} é moderno."
else
  puts "#{nome} é clássico."
end

# Iteradores e Blocos
nomes.each do |criador|
  puts "Olá, #{criador}!"
end

# Métodos
def saudacao(nome)
  "Olá, #{nome.capitalize}!"
end
puts saudacao("mundo")

# Classes
class Pessoa
  def initialize(nome)
    @nome = nome
  end

  def nome
    @nome
  end
end
dev = Pessoa.new("Yukihiro")
puts dev.nome
`,
    },
  ],
  "Frontend": [
    {
      title: 'HTML: Tags e Atributos Essenciais',
      content: `
<!-- Estrutura básica de um documento HTML5 -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Título da Página</title>
</head>
<body>
    <header>
        <h1>Título Principal</h1>
        <nav>
            <a href="/inicio">Início</a>
        </nav>
    </header>
    <main>
        <article>
            <h2>Título do Artigo</h2>
            <p>Parágrafo com um <a href="https://example.com" target="_blank">link</a>.</p>
            <img src="imagem.jpg" alt="Descrição da imagem">
        </article>
        <ul>
            <li>Item de lista 1</li>
            <li>Item de lista 2</li>
        </ul>
    </main>
    <footer>
        <p>&copy; 2024 Meu Site</p>
    </footer>
</body>
</html>`,
    },
    {
      title: 'CSS: Seletores e Propriedades Chave',
      content: `
/* Seletor de Tag */
body {
  font-family: sans-serif;
  line-height: 1.6;
}

/* Seletor de Classe */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Seletor de ID */
#header {
  background-color: #f4f4f4;
  padding: 1rem;
}

/* Pseudo-classe (hover) */
a:hover {
  color: #007bff;
  text-decoration: underline;
}

/* Combinador (descendente) */
article p {
  color: #333;
}
`,
    },
    {
      title: 'CSS: Design Responsivo e Animações',
      content: `
/* Media Query para telas menores (mobile-first) */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    display: flex; /* Exemplo de Flexbox */
    justify-content: space-between;
  }
}

/* Transições */
.botao {
  background-color: blue;
  transition: background-color 0.3s ease-in-out;
}
.botao:hover {
  background-color: darkblue;
}

/* Animação com Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.elemento-animado {
  animation: fadeIn 1s forwards;
}
`,
    },
    {
      title: 'JavaScript: ES6+ e DOM',
      content: `
// let e const
const PI = 3.14;
let contador = 0;

// Arrow Functions
const somar = (a, b) => a + b;

// Promises e Async/Await para chamadas assíncronas
async function buscarDados() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Falha ao buscar dados:", error);
  }
}

// Manipulação do DOM
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('meuBotao');
  const titulo = document.querySelector('h1');

  botao.addEventListener('click', () => {
    titulo.textContent = 'Texto Alterado!';
    titulo.classList.add('destaque');
  });
});
`,
    },
    {
      title: 'React: Componentes e Hooks',
      content: `
import React, { useState, useEffect } from 'react';

// Componente Funcional com Hooks
function Contador() {
  // Hook de Estado (useState)
  const [contagem, setContagem] = useState(0);

  // Hook de Efeito (useEffect)
  useEffect(() => {
    // Executa após cada renderização
    document.title = \`Contagem: \${contagem}\`;
    
    // Função de limpeza (executa na desmontagem)
    return () => document.title = 'React App';
  }, [contagem]); // Array de dependências

  return (
    <div>
      <p>Você clicou {contagem} vezes</p>
      <button onClick={() => setContagem(contagem + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
`,
    },
    {
      title: 'React: TypeScript e API com Axios',
      content: `
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Definindo a interface para os dados da API
interface Post {
  id: number;
  title: string;
}

// Tipando as props do componente
interface PostListProps {
  userId: number;
}

const PostList: React.FC<PostListProps> = ({ userId }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        \`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`
      );
      setPosts(res.data);
      setLoading(false);
    };
    
    fetchPosts();
  }, [userId]); // Refaz a chamada se userId mudar

  if (loading) return <p>Carregando...</p>;

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
};
`,
    },
    {
      title: 'TailwindCSS: Classes Utilitárias e Responsividade',
      content: `
<!-- 
  bg-blue-500: Cor de fundo azul
  text-white: Cor do texto branco
  font-bold: Negrito
  py-2 px-4: Padding vertical e horizontal
  rounded: Bordas arredondadas
  hover:bg-blue-700: Muda a cor de fundo no hover
  md:text-lg: Aumenta o texto em telas médias ou maiores
  flex items-center: Centraliza itens com flexbox
-->

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Botão
</button>

<!-- Card Responsivo -->
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 md:flex-col md:text-center">
  <div class="flex-shrink-0">
    <!-- ... ícone ... -->
  </div>
  <div>
    <div class="text-xl font-medium text-black">Card Title</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
`,
    },
    {
      title: 'Next.js: Roteamento e Data Fetching',
      content: `
// Roteamento baseado em arquivos:
// - pages/index.js -> rota '/'
// - pages/about.js -> rota '/about'
// - pages/posts/[id].js -> rota dinâmica '/posts/1', '/posts/2', etc.

// Link para navegação (client-side)
import Link from 'next/link';

function Menu() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">Sobre</Link>
    </nav>
  );
}

// Data Fetching (getStaticProps para páginas estáticas)
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: { // props passadas para o componente da página
      posts,
    },
    revalidate: 10, // Revalidação estática incremental (em segundos)
  };
}
`,
    },
    {
      title: 'Angular: Componentes e Data Binding',
      content: `
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  titulo = 'Meu App Angular';
  imagemUrl = 'path/para/imagem.png';

  onClickBotao() {
    alert('Botão clicado!');
  }
}

// app.component.html
<!-- Interpolação (One-way binding) -->
<h1>{{ titulo }}</h1>

<!-- Property Binding (One-way binding) -->
<img [src]="imagemUrl">

<!-- Event Binding (One-way binding) -->
<button (click)="onClickBotao()">Clique aqui</button>

<!-- Two-way binding -->
<input [(ngModel)]="titulo">
`,
    },
    {
      title: 'TypeScript: Tipos, Interfaces e Genéricos',
      content: `
// Tipos básicos
let nome: string = "Ada";
let idade: number = 30;
let hobbies: string[] = ["programar", "ler"];

// Interface: define a forma de um objeto
interface Usuario {
  id: number;
  nome: string;
  email?: string; // Propriedade opcional
}

function exibirUsuario(user: Usuario) {
  console.log(user.nome);
}

// Classes com TypeScript
class Animal {
  constructor(public nome: string) {}

  mover(distancia: number): void {
    console.log(\`\${this.nome} moveu \${distancia}m.\`);
  }
}

// Genéricos
function primeiroElemento<T>(arr: T[]): T {
  return arr[0];
}
const primeiroNome = primeiroElemento<string>(["Ana", "Bia"]);
`,
    },
    {
      title: 'HTML: Lista Completa de Tags',
      content: `
<!-- Documento -->
<!DOCTYPE html> <html> <head> <body>

<!-- Metadados do Cabeçalho -->
<title> <base> <link> <meta> <style> <script> <noscript>

<!-- Seções do Conteúdo -->
<header> <footer> <main> <article> <section> <aside> <nav> <h1> <h2> <h3> <h4> <h5> <h6>

<!-- Agrupamento de Conteúdo -->
<p> <hr> <pre> <blockquote> <ol> <ul> <li> <dl> <dt> <dd> <figure> <figcaption> <div>

<!-- Semântica de Texto -->
<a> <em> <strong> <small> <s> <cite> <q> <dfn> <abbr> <data> <time> <code> <var> <samp> <kbd> <sub> <sup> <i> <b> <u> <mark> <ruby> <rt> <rp> <bdi> <bdo> <span> <br> <wbr>

<!-- Mídia Embutida -->
<img> <picture> <source> <canvas> <svg> <math> <iframe> <embed> <object> <param> <video> <audio> <track> <map> <area>

<!-- Tabelas -->
<table> <caption> <colgroup> <col> <tbody> <thead> <tfoot> <tr> <td> <th>

<!-- Formulários -->
<form> <label> <input> <button> <select> <datalist> <optgroup> <option> <textarea> <output> <progress> <meter> <fieldset> <legend>

<!-- Interatividade -->
<details> <summary> <dialog> <menu>
`
    },
    {
      title: 'CSS: Lista de Propriedades Comuns',
      content: `
/* Box Model */
margin, padding, border, width, height, min-width, max-width, min-height, max-height, box-sizing

/* Posicionamento */
position, top, right, bottom, left, z-index, display, float, clear

/* Flexbox */
flex-direction, flex-wrap, justify-content, align-items, align-content, order, flex-grow, flex-shrink, flex-basis, align-self

/* Grid */
grid-template-columns, grid-template-rows, grid-gap, grid-column, grid-row, justify-items, align-items

/* Fundo e Cor */
background, background-color, background-image, background-repeat, background-position, background-size, color, opacity

/* Tipografia */
font, font-family, font-size, font-weight, font-style, line-height, text-align, text-decoration, text-transform, letter-spacing, white-space

/* Transições e Animações */
transition, transition-property, transition-duration, transition-timing-function, animation, animation-name, animation-duration, keyframes

/* Transformações */
transform, transform-origin, transform-style

/* UI e Aparência */
cursor, border-radius, box-shadow, text-shadow, filter, appearance, user-select, pointer-events, overflow

/* Listas e Contadores */
list-style, list-style-type, counter-increment, counter-reset, content
`
    }
  ],
  "Backend": [
    {
      title: 'Django: Models, Views e URLs',
      content: `
# models.py - Define a estrutura do banco de dados
from django.db import models

class Post(models.Model):
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    data_publicacao = models.DateTimeField(auto_now_add=True)

# views.py - Lógica para manipular requisições
from django.shortcuts import render
from .models import Post

def lista_posts(request):
    posts = Post.objects.all().order_by('-data_publicacao')
    return render(request, 'blog/lista_posts.html', {'posts': posts})

# urls.py - Mapeia URLs para as views
from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_posts, name='lista_posts'),
]
`,
    },
    {
      title: 'Flask: Aplicação Mínima e Rotas',
      content: `
from flask import Flask, jsonify, render_template

# Cria a instância da aplicação
app = Flask(__name__)

# Rota para a página inicial, renderiza um template HTML
@app.route('/')
def index():
    return render_template('index.html', titulo="Página Inicial")

# Rota para uma API que retorna JSON
@app.route('/api/usuarios')
def get_usuarios():
    usuarios = [
        {'id': 1, 'nome': 'Alice'},
        {'id': 2, 'nome': 'Bob'}
    ]
    return jsonify(usuarios)

# Rota com parâmetro dinâmico
@app.route('/usuario/<string:nome>')
def saudar(nome):
    return f"<h1>Olá, {nome}!</h1>"

if __name__ == '__main__':
    app.run(debug=True)
`,
    },
    {
      title: 'Ruby on Rails: MVC e Scaffolding',
      content: `
# 1. Criar um novo projeto Rails
# rails new meu_blog

# 2. Gerar um scaffold (Model, View, Controller, Migrations)
# rails generate scaffold Post title:string body:text

# 3. Rodar as migrações para criar a tabela no DB
# rails db:migrate

# config/routes.rb - Rails gera as rotas automaticamente
Rails.application.routes.draw do
  resources :posts # Cria rotas para index, show, new, create, etc.
end

# app/models/post.rb - Modelo (Active Record)
class Post < ApplicationRecord
  validates :title, presence: true
end

# app/controllers/posts_controller.rb - Controller
class PostsController < ApplicationController
  def index
    @posts = Post.all
  end
  # ... outras actions (show, new, create, etc.)
end
`,
    },
    {
      title: 'Spring Boot: REST Controller',
      content: `
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController // Anotação que combina @Controller e @ResponseBody
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@GetMapping("/") // Mapeia requisições GET para "/"
	public String home() {
		return "Olá, Mundo com Spring Boot!";
	}

	@GetMapping("/hello/{name}") // Mapeia com variável de path
	public String hello(@PathVariable String name) {
		return "Olá, " + name + "!";
	}
}
`,
    },
    {
      title: 'GraphQL: Schema e Queries',
      content: `
# Schema Definition Language (SDL) - Define a API
type Query {
  "Busca um livro pelo seu ID"
  livro(id: ID!): Livro
  "Retorna uma lista de todos os livros"
  livros: [Livro]
}

type Livro {
  id: ID!
  titulo: String
  autor: Autor
}

type Autor {
  id: ID!
  nome: String
  livros: [Livro]
}

# Exemplo de Query - Cliente pede exatamente o que precisa
query BuscarLivroEAutor {
  livro(id: "1") {
    titulo
    autor {
      nome
    }
  }
}

# Exemplo de Mutation - Para modificar dados
mutation CriarLivro {
  createLivro(titulo: "Aprendendo GraphQL", autorId: "2") {
    id
    titulo
  }
}
`,
    },
  ],
  "DevOps": [
    {
      title: 'Git: Fluxo de Trabalho Essencial',
      content: `
# Iniciar um novo repositório
git init

# Clonar um repositório existente
git clone [url]

# Adicionar arquivos para o próximo commit
git add [arquivo]       # Adiciona um arquivo específico
git add .               # Adiciona todos os arquivos modificados

# Commitar as mudanças
git commit -m "Mensagem do commit"

# Enviar mudanças para o repositório remoto
git push origin [branch]

# Puxar mudanças do repositório remoto
git pull

# Ver o status dos arquivos
git status

# Ver o histórico de commits
git log
`,
    },
    {
      title: 'Git: Trabalhando com Branches',
      content: `
# Criar uma nova branch
git branch [nome-da-branch]

# Mudar para uma branch
git checkout [nome-da-branch]
# Ou, criar e mudar de uma vez:
git checkout -b [nome-da-nova-branch]

# Listar todas as branches
git branch

# Juntar uma branch na sua branch atual (ex: main)
# Primeiro, vá para a branch que receberá as mudanças
git checkout main
# Agora, faça o merge
git merge [branch-a-ser-unida]

# Deletar uma branch
git branch -d [nome-da-branch]
`,
    },
    {
      title: 'GitHub Actions: Workflow de CI',
      content: `
# .github/workflows/ci.yml

name: Node.js CI

# Gatilho: executa em push e pull request para a branch main
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    # Máquina virtual onde o job vai rodar
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x, 18.x] # Roda o teste em múltiplas versões

    steps:
    # 1. Clona o repositório
    - uses: actions/checkout@v3

    # 2. Configura a versão do Node.js
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: \${{ matrix.node-version }}

    # 3. Instala dependências e roda os testes
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
`,
    },
    {
      title: 'Dependabot: Configuração de Atualizações',
      content: `
# .github/dependabot.yml
# Configura o Dependabot para verificar e criar PRs para atualizar dependências

version: 2
updates:
  # Mantém as dependências do npm/yarn atualizadas
  - package-ecosystem: "npm"
    directory: "/" # Localização do package.json
    schedule:
      interval: "weekly" # Frequência da verificação
    # Adicionar labels aos PRs do Dependabot
    labels:
      - "dependencies"
      - "javascript"

  # Mantém as GitHub Actions atualizadas
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
`,
    },
    {
      title: 'CodeQL: Workflow de Análise de Código',
      content: `
# .github/workflows/codeql-analysis.yml
# Roda a análise de segurança do CodeQL para encontrar vulnerabilidades

name: "CodeQL"

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
  schedule:
    - cron: '30 2 * * 1' # Roda toda segunda-feira às 2:30

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest

    strategy:
      fail-fast: false
      matrix:
        # CodeQL suporta várias linguagens
        language: [ 'javascript', 'python' ]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    # Inicializa o CodeQL
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v2
      with:
        languages: \${{ matrix.language }}

    # Compila o código (se necessário)
    # - name: Autobuild
    #   uses: github/codeql-action/autobuild@v2

    # Roda a análise
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v2
`,
    },
    {
      title: 'GitHub Actions: Dependabot Auto Merge',
      content: `
# .github/workflows/dependabot-auto-merge.yml
name: Dependabot Auto Merge

on:
  pull_request_target:
    types:
      - opened
      - synchronize
      - reopened

jobs:
  auto-merge:
    runs-on: ubuntu-latest
    # Condição: Só executa se o autor do PR for o bot do Dependabot
    if: github.actor == 'dependabot[bot]'
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "\${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "\${{ github.event.pull_request.html_url }}"
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
      - name: Enable auto-merge for Dependabot PRs
        # Condição: Só faz merge automático para atualizações de patch ou minor
        if: steps.metadata.outputs.update-type == 'version-update:semver-minor' || steps.metadata.outputs.update-type == 'version-update:semver-patch'
        run: gh pr merge --auto --merge "\${{ github.event.pull_request.html_url }}"
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
`
    }
  ],
  "Banco de Dados": [
    {
      title: 'SQL: Comandos de Consulta (SELECT)',
      content: `
-- Selecionar todas as colunas de uma tabela
SELECT * FROM usuarios;

-- Selecionar colunas específicas
SELECT nome, email FROM usuarios;

-- Filtrar resultados com WHERE
SELECT * FROM produtos WHERE preco > 50.00;

-- Ordenar resultados com ORDER BY
SELECT nome, preco FROM produtos ORDER BY preco DESC; -- (Decrescente)

-- Limitar o número de resultados
SELECT * FROM posts LIMIT 10;

-- Contar o número de registros
SELECT COUNT(*) FROM pedidos WHERE status = 'entregue';

-- Agrupar resultados com GROUP BY
SELECT categoria, AVG(preco) FROM produtos GROUP BY categoria;
`,
    },
    {
      title: 'SQL: Comandos de Manipulação (DML)',
      content: `
-- Inserir um novo registro na tabela
INSERT INTO usuarios (nome, email, senha)
VALUES ('Ana', 'ana@example.com', 'senha123');

-- Atualizar um registro existente
UPDATE produtos
SET preco = 29.99, estoque = 100
WHERE id = 101;

-- Deletar um registro
DELETE FROM usuarios WHERE email = 'ana@example.com';

-- ATENÇÃO: DELETE sem WHERE remove todos os registros da tabela!
`,
    },
    {
      title: 'SQL: JOINs',
      content: `
-- INNER JOIN: Retorna registros quando há correspondência em ambas as tabelas.
SELECT pedidos.id, usuarios.nome
FROM pedidos
INNER JOIN usuarios ON pedidos.usuario_id = usuarios.id;

-- LEFT JOIN: Retorna todos os registros da tabela da esquerda (pedidos)
-- e os registros correspondentes da tabela da direita (usuarios).
-- Se não houver correspondência, as colunas da direita virão como NULL.
SELECT pedidos.id, usuarios.nome
FROM pedidos
LEFT JOIN usuarios ON pedidos.usuario_id = usuarios.id;

-- RIGHT JOIN: O oposto do LEFT JOIN. Retorna todos da tabela da direita.
SELECT pedidos.id, usuarios.nome
FROM pedidos
RIGHT JOIN usuarios ON pedidos.usuario_id = usuarios.id;
`,
    },
  ],
  "Ciência de Dados": [
    {
      title: 'Pandas: Leitura e Manipulação de Dados',
      content: `
import pandas as pd

# Criar um DataFrame a partir de um dicionário
data = {'Nome': ['Ana', 'Bruno', 'Carlos'], 'Idade': [23, 34, 19]}
df = pd.DataFrame(data)

# Ler dados de um arquivo CSV
# df = pd.read_csv('dados.csv')

# Visualizar as primeiras linhas
print(df.head())

# Selecionar uma coluna
idades = df['Idade']

# Filtrar linhas com base em uma condição
adultos = df[df['Idade'] > 21]
print(adultos)
`,
    },
  ],
};