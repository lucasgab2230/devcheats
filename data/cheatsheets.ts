
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
      title: 'React: Hooks Avançados',
      content: `
import React, { useContext, useReducer, useMemo, useCallback, createContext } from 'react';

// useContext - Compartilhar estado entre componentes sem prop drilling
const TemaContext = createContext('claro');

function App() {
  return (
    <TemaContext.Provider value="escuro">
      <BotaoTema />
    </TemaContext.Provider>
  );
}

function BotaoTema() {
  const tema = useContext(TemaContext);
  return <button className={tema}>Tema: {tema}</button>;
}

// useReducer - Para lógica de estado complexa
interface Estado { contador: number }
type Acao = { type: 'incrementar' } | { type: 'decrementar' };

function reducer(estado: Estado, acao: Acao): Estado {
  switch (acao.type) {
    case 'incrementar': return { contador: estado.contador + 1 };
    case 'decrementar': return { contador: estado.contador - 1 };
    default: return estado;
  }
}

function Contador() {
  const [estado, dispatch] = useReducer(reducer, { contador: 0 });
  return (
    <>
      <span>{estado.contador}</span>
      <button onClick={() => dispatch({ type: 'incrementar' })}>+</button>
    </>
  );
}

// useMemo - Memorizar valores computados caros
const valoresOrdenados = useMemo(() => {
  return valores.sort((a, b) => a - b);
}, [valores]); // Recalcula apenas quando 'valores' muda

// useCallback - Memorizar funções para evitar renderizações desnecessárias
const handleClick = useCallback(() => {
  console.log('Clicado!', id);
}, [id]); // Nova função apenas quando 'id' muda
`,
    },
    {
      title: 'React Router: Navegação e Rotas',
      content: `
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// Configuração básica de rotas
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/usuarios/123">Usuário 123</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/usuarios/:id" element={<Usuario />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}

// useParams - Acessar parâmetros da URL
function Usuario() {
  const { id } = useParams<{ id: string }>();
  return <h1>Usuário ID: {id}</h1>;
}

// useNavigate - Navegação programática
function FormularioLogin() {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Após login bem-sucedido
    navigate('/dashboard');
    // Ou substituir histórico (voltar não retorna ao login)
    navigate('/dashboard', { replace: true });
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}

// Rotas aninhadas
<Route path="/dashboard" element={<Dashboard />}>
  <Route index element={<DashboardHome />} />
  <Route path="perfil" element={<Perfil />} />
  <Route path="config" element={<Configuracoes />} />
</Route>
`,
    },
    {
      title: 'React: Gerenciamento de Estado',
      content: `
// 1. useState - Estado local simples
const [nome, setNome] = useState('');

// 2. useReducer - Estado local complexo
const [state, dispatch] = useReducer(reducer, initialState);

// 3. Context API - Estado global sem bibliotecas externas
const UsuarioContext = createContext<Usuario | null>(null);

function UsuarioProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  
  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}

// Custom Hook para acessar o contexto
function useUsuario() {
  const context = useContext(UsuarioContext);
  if (!context) throw new Error('useUsuario deve estar dentro de UsuarioProvider');
  return context;
}

// 4. Padrão de Estado com Custom Hooks
function useContador(inicial = 0) {
  const [valor, setValor] = useState(inicial);
  
  const incrementar = useCallback(() => setValor(v => v + 1), []);
  const decrementar = useCallback(() => setValor(v => v - 1), []);
  const resetar = useCallback(() => setValor(inicial), [inicial]);
  
  return { valor, incrementar, decrementar, resetar };
}

// Uso do custom hook
function MeuComponente() {
  const { valor, incrementar, decrementar } = useContador(10);
  return (
    <div>
      <span>{valor}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
}
`,
    },
    {
      title: 'React: Formulários e Validação',
      content: `
import React, { useState, FormEvent, ChangeEvent } from 'react';

// Formulário Controlado
function FormularioContato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [erros, setErros] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpar erro do campo quando usuário digita
    if (erros[name]) {
      setErros(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validar = (): boolean => {
    const novosErros: Record<string, string> = {};
    
    if (!formData.nome.trim()) {
      novosErros.nome = 'Nome é obrigatório';
    }
    if (!formData.email.includes('@')) {
      novosErros.email = 'Email inválido';
    }
    if (formData.mensagem.length < 10) {
      novosErros.mensagem = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validar()) {
      console.log('Dados do formulário:', formData);
      // Enviar para API
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" value={formData.nome} onChange={handleChange} />
      {erros.nome && <span className="erro">{erros.nome}</span>}
      
      <input name="email" type="email" value={formData.email} onChange={handleChange} />
      {erros.email && <span className="erro">{erros.email}</span>}
      
      <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} />
      {erros.mensagem && <span className="erro">{erros.mensagem}</span>}
      
      <button type="submit">Enviar</button>
    </form>
  );
}
`,
    },
    {
      title: 'React: Padrões de Componentes',
      content: `
import React, { ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react';

// 1. Compound Components - Componentes compostos
function Card({ children }: { children: ReactNode }) {
  return <div className="card">{children}</div>;
}

Card.Header = ({ children }: { children: ReactNode }) => (
  <div className="card-header">{children}</div>
);

Card.Body = ({ children }: { children: ReactNode }) => (
  <div className="card-body">{children}</div>
);

// Uso: <Card><Card.Header>Título</Card.Header><Card.Body>Conteúdo</Card.Body></Card>

// 2. Render Props - Passar função como children
interface MouseTrackerProps {
  children: (position: { x: number; y: number }) => ReactNode;
}

function MouseTracker({ children }: MouseTrackerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  return (
    <div onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}>
      {children(position)}
    </div>
  );
}

// Uso: <MouseTracker>{({ x, y }) => <p>Mouse: {x}, {y}</p>}</MouseTracker>

// 3. forwardRef - Encaminhar refs para elementos DOM
interface BotaoProps extends ComponentPropsWithoutRef<'button'> {
  variante?: 'primario' | 'secundario';
}

const Botao = forwardRef<HTMLButtonElement, BotaoProps>(
  ({ variante = 'primario', children, ...props }, ref) => {
    return (
      <button ref={ref} className={\`btn btn-\${variante}\`} {...props}>
        {children}
      </button>
    );
  }
);

// 4. Higher-Order Component (HOC)
function comCarregamento<P extends object>(Componente: React.ComponentType<P>) {
  return function ComCarregamento({ carregando, ...props }: P & { carregando: boolean }) {
    if (carregando) return <div>Carregando...</div>;
    return <Componente {...(props as P)} />;
  };
}
`,
    },
    {
      title: 'React: Performance e Otimização',
      content: `
import React, { memo, useMemo, useCallback, lazy, Suspense } from 'react';

// 1. React.memo - Evitar re-renderizações desnecessárias
interface ItemProps {
  id: number;
  nome: string;
  onClick: (id: number) => void;
}

const Item = memo(function Item({ id, nome, onClick }: ItemProps) {
  console.log('Item renderizado:', id);
  return <li onClick={() => onClick(id)}>{nome}</li>;
});

// 2. useMemo - Memorizar valores computados
function ListaFiltrada({ itens, filtro }: { itens: Item[]; filtro: string }) {
  const itensFiltrados = useMemo(() => {
    return itens.filter(item => 
      item.nome.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [itens, filtro]); // Recalcula apenas quando itens ou filtro mudam
  
  return <ul>{itensFiltrados.map(item => <li key={item.id}>{item.nome}</li>)}</ul>;
}

// 3. useCallback - Memorizar callbacks
function Lista({ itens }: { itens: Item[] }) {
  const handleClick = useCallback((id: number) => {
    console.log('Clicado:', id);
  }, []); // Função estável entre renderizações
  
  return (
    <ul>
      {itens.map(item => (
        <Item key={item.id} {...item} onClick={handleClick} />
      ))}
    </ul>
  );
}

// 4. Lazy Loading - Carregar componentes sob demanda
const PaginaPesada = lazy(() => import('./PaginaPesada'));

function App() {
  return (
    <Suspense fallback={<div>Carregando página...</div>}>
      <PaginaPesada />
    </Suspense>
  );
}

// 5. Virtualização para listas longas (conceito)
// Use bibliotecas como react-window ou react-virtualized
// para renderizar apenas itens visíveis em listas com milhares de itens
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
    },
    {
      title: 'HTML: Formulários e Inputs',
      content: `
<!-- Formulário completo com diversos tipos de input -->
<form action="/submit" method="POST" enctype="multipart/form-data">
  <!-- Campos de texto -->
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" autocomplete="email">
  
  <label for="senha">Senha:</label>
  <input type="password" id="senha" name="senha" minlength="8">
  
  <!-- Números e Datas -->
  <input type="number" name="idade" min="18" max="120" step="1">
  <input type="date" name="data_nascimento">
  <input type="time" name="horario">
  <input type="datetime-local" name="agendamento">
  
  <!-- Seleção -->
  <input type="checkbox" id="termos" name="termos" checked>
  <label for="termos">Aceito os termos</label>
  
  <input type="radio" id="masc" name="genero" value="M">
  <label for="masc">Masculino</label>
  <input type="radio" id="fem" name="genero" value="F">
  <label for="fem">Feminino</label>
  
  <!-- Select / Dropdown -->
  <select name="pais" required>
    <option value="">Selecione...</option>
    <option value="BR">Brasil</option>
    <option value="US">Estados Unidos</option>
  </select>
  
  <!-- Textarea -->
  <textarea name="mensagem" rows="4" cols="50" maxlength="500"></textarea>
  
  <!-- Arquivo e Outros -->
  <input type="file" name="documento" accept=".pdf,.doc">
  <input type="color" name="cor_favorita" value="#ff0000">
  <input type="range" name="volume" min="0" max="100" value="50">
  
  <button type="submit">Enviar</button>
  <button type="reset">Limpar</button>
</form>
`
    },
    {
      title: 'HTML: Acessibilidade (a11y)',
      content: `
<!-- Atributos ARIA para acessibilidade -->

<!-- Roles - Define o papel do elemento -->
<nav role="navigation" aria-label="Menu Principal">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/sobre">Sobre</a></li>
  </ul>
</nav>

<!-- aria-label - Texto alternativo para leitores de tela -->
<button aria-label="Fechar modal">
  <span aria-hidden="true">&times;</span>
</button>

<!-- aria-labelledby e aria-describedby -->
<div role="dialog" aria-labelledby="titulo-modal" aria-describedby="desc-modal">
  <h2 id="titulo-modal">Confirmar Ação</h2>
  <p id="desc-modal">Você tem certeza que deseja continuar?</p>
</div>

<!-- Estados e Propriedades -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<div id="menu" aria-hidden="true">...</div>

<input type="text" aria-required="true" aria-invalid="false">

<!-- Live Regions - Anuncia mudanças dinâmicas -->
<div role="alert" aria-live="assertive">Erro: Preencha todos os campos.</div>
<div aria-live="polite">Carregando...</div>

<!-- Skip Links para navegação por teclado -->
<a href="#conteudo-principal" class="skip-link">Pular para o conteúdo</a>

<!-- Imagens -->
<img src="grafico.png" alt="Gráfico de vendas mostrando crescimento de 20%">
<img src="decorativo.png" alt="" role="presentation"> <!-- Decorativo -->
`
    },
    {
      title: 'HTML: Meta Tags e SEO',
      content: `
<head>
  <!-- Charset e Viewport -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Básico -->
  <title>Título da Página | Nome do Site</title>
  <meta name="description" content="Descrição concisa da página (até 160 caracteres)">
  <meta name="keywords" content="palavra-chave1, palavra-chave2">
  <meta name="author" content="Nome do Autor">
  <meta name="robots" content="index, follow">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://example.com/pagina">
  
  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:title" content="Título para Compartilhamento">
  <meta property="og:description" content="Descrição para redes sociais">
  <meta property="og:image" content="https://example.com/imagem.jpg">
  <meta property="og:url" content="https://example.com/pagina">
  <meta property="og:type" content="website">
  
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Título para Twitter">
  <meta name="twitter:description" content="Descrição para Twitter">
  <meta name="twitter:image" content="https://example.com/imagem.jpg">
  
  <!-- Favicon e Ícones -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
  <!-- Preload e Prefetch -->
  <link rel="preload" href="/fonts/minha-fonte.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="prefetch" href="/proxima-pagina.html">
</head>
`
    },
    {
      title: 'CSS: Flexbox Completo',
      content: `
/* Container Flex */
.container {
  display: flex;             /* Ativa flexbox */
  flex-direction: row;       /* row | row-reverse | column | column-reverse */
  flex-wrap: wrap;           /* nowrap | wrap | wrap-reverse */
  justify-content: center;   /* flex-start | flex-end | center | space-between | space-around | space-evenly */
  align-items: center;       /* flex-start | flex-end | center | stretch | baseline */
  align-content: center;     /* Alinha múltiplas linhas */
  gap: 1rem;                 /* Espaço entre itens */
}

/* Itens Flex */
.item {
  flex-grow: 1;              /* Proporção de crescimento */
  flex-shrink: 0;            /* Proporção de encolhimento */
  flex-basis: 200px;         /* Tamanho base antes de crescer/encolher */
  flex: 1 0 200px;           /* Shorthand: grow shrink basis */
  align-self: flex-end;      /* Alinhamento individual */
  order: 2;                  /* Ordem de exibição */
}

/* Padrões Comuns */
/* Centralizar elemento */
.centralizado {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Layout de Cards */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Cresce, encolhe, base 300px */
}

/* Footer sempre no final */
.pagina {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.conteudo { flex: 1; }
`
    },
    {
      title: 'CSS: Grid Layout Completo',
      content: `
/* Container Grid */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);     /* 3 colunas iguais */
  grid-template-columns: 200px 1fr 2fr;      /* Colunas mistas */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsivo */
  grid-template-rows: auto 1fr auto;         /* Linhas */
  gap: 1rem;                                  /* Espaço entre células */
  row-gap: 1rem;                              /* Espaço entre linhas */
  column-gap: 2rem;                           /* Espaço entre colunas */
}

/* Posicionamento de Itens */
.item {
  grid-column: 1 / 3;        /* Da coluna 1 até 3 */
  grid-column: span 2;       /* Ocupa 2 colunas */
  grid-row: 1 / 4;           /* Da linha 1 até 4 */
  grid-area: 1 / 1 / 3 / 4;  /* row-start / col-start / row-end / col-end */
}

/* Grid Template Areas */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.nav    { grid-area: nav; }
.main   { grid-area: main; }
.aside  { grid-area: aside; }
.footer { grid-area: footer; }

/* Alinhamento */
.container {
  justify-items: center;     /* Alinha itens horizontalmente */
  align-items: center;       /* Alinha itens verticalmente */
  justify-content: center;   /* Alinha grid horizontalmente */
  align-content: center;     /* Alinha grid verticalmente */
}
`
    },
    {
      title: 'CSS: Variáveis e Custom Properties',
      content: `
/* Definindo variáveis CSS (Custom Properties) */
:root {
  /* Cores */
  --cor-primaria: #3b82f6;
  --cor-secundaria: #10b981;
  --cor-texto: #1f2937;
  --cor-fundo: #ffffff;
  
  /* Tipografia */
  --fonte-principal: 'Inter', sans-serif;
  --tamanho-base: 16px;
  --linha-altura: 1.5;
  
  /* Espaçamento */
  --espacamento-xs: 0.25rem;
  --espacamento-sm: 0.5rem;
  --espacamento-md: 1rem;
  --espacamento-lg: 2rem;
  
  /* Bordas e Sombras */
  --borda-radius: 0.5rem;
  --sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  /* Transições */
  --transicao-rapida: 150ms ease-in-out;
  --transicao-media: 300ms ease-in-out;
}

/* Tema Escuro */
[data-theme="dark"] {
  --cor-texto: #f3f4f6;
  --cor-fundo: #111827;
}

/* Usando variáveis */
.botao {
  background-color: var(--cor-primaria);
  color: var(--cor-fundo);
  padding: var(--espacamento-sm) var(--espacamento-md);
  border-radius: var(--borda-radius);
  transition: background-color var(--transicao-rapida);
}

/* Fallback */
.elemento {
  color: var(--cor-indefinida, #333); /* Usa #333 se não existir */
}

/* Variáveis em Media Queries */
@media (prefers-color-scheme: dark) {
  :root {
    --cor-texto: #f3f4f6;
    --cor-fundo: #111827;
  }
}
`
    },
    {
      title: 'CSS: Pseudo-elementos e Pseudo-classes',
      content: `
/* Pseudo-classes de Estado */
a:hover { color: blue; }           /* Mouse sobre */
a:active { color: red; }           /* Clicando */
a:visited { color: purple; }       /* Link visitado */
input:focus { outline: 2px solid blue; } /* Com foco */
input:disabled { opacity: 0.5; }   /* Desabilitado */
input:checked + label { font-weight: bold; } /* Checkbox marcado */

/* Pseudo-classes Estruturais */
li:first-child { font-weight: bold; }  /* Primeiro filho */
li:last-child { border: none; }        /* Último filho */
li:nth-child(odd) { background: #f0f0f0; }  /* Ímpares */
li:nth-child(even) { background: #fff; }    /* Pares */
li:nth-child(3n) { color: red; }       /* Cada terceiro */
p:first-of-type { font-size: 1.2em; }  /* Primeiro do tipo */

/* Pseudo-classes de Formulário */
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:required { border-left: 3px solid red; }
input:placeholder-shown { font-style: italic; }

/* Pseudo-elementos */
p::before {
  content: "→ ";
  color: blue;
}

p::after {
  content: " ←";
  color: blue;
}

p::first-letter {
  font-size: 2em;
  float: left;
}

p::first-line {
  font-weight: bold;
}

input::placeholder {
  color: #999;
  font-style: italic;
}

::selection {
  background: #3b82f6;
  color: white;
}
`
    },
    {
      title: 'JavaScript: Métodos de Array',
      content: `
const numeros = [1, 2, 3, 4, 5];
const usuarios = [
  { nome: 'Ana', idade: 25 },
  { nome: 'Bruno', idade: 30 },
  { nome: 'Carlos', idade: 20 }
];

// map() - Transforma cada elemento
const dobrados = numeros.map(n => n * 2); // [2, 4, 6, 8, 10]
const nomes = usuarios.map(u => u.nome);  // ['Ana', 'Bruno', 'Carlos']

// filter() - Filtra elementos
const pares = numeros.filter(n => n % 2 === 0); // [2, 4]
const adultos = usuarios.filter(u => u.idade >= 25);

// find() - Encontra primeiro elemento
const encontrado = usuarios.find(u => u.nome === 'Bruno');

// findIndex() - Índice do primeiro elemento
const indice = usuarios.findIndex(u => u.nome === 'Bruno'); // 1

// reduce() - Reduz a um único valor
const soma = numeros.reduce((acc, n) => acc + n, 0); // 15
const maiorIdade = usuarios.reduce((max, u) => 
  u.idade > max ? u.idade : max, 0); // 30

// some() / every() - Testa condições
const temPar = numeros.some(n => n % 2 === 0);     // true
const todosPares = numeros.every(n => n % 2 === 0); // false

// includes() - Verifica presença
const temTres = numeros.includes(3); // true

// sort() - Ordena (modifica original)
const ordenados = [...numeros].sort((a, b) => b - a); // [5,4,3,2,1]
const porNome = [...usuarios].sort((a, b) => a.nome.localeCompare(b.nome));

// flat() / flatMap() - Achata arrays aninhados
const aninhado = [[1, 2], [3, 4]];
const plano = aninhado.flat(); // [1, 2, 3, 4]

// slice() - Copia parte do array (não modifica original)
const parte = numeros.slice(1, 3); // [2, 3]

// splice() - Remove/adiciona elementos (modifica original)
// array.splice(inicio, quantidadeRemover, ...novosElementos)
`
    },
    {
      title: 'JavaScript: Métodos de Objeto e String',
      content: `
// Métodos de Object
const pessoa = { nome: 'Ana', idade: 25, cidade: 'SP' };

Object.keys(pessoa);    // ['nome', 'idade', 'cidade']
Object.values(pessoa);  // ['Ana', 25, 'SP']
Object.entries(pessoa); // [['nome', 'Ana'], ['idade', 25], ['cidade', 'SP']]

Object.assign({}, pessoa, { email: 'ana@mail.com' }); // Merge
{ ...pessoa, email: 'ana@mail.com' }; // Spread (mais moderno)

Object.freeze(pessoa);  // Impede modificações
Object.seal(pessoa);    // Impede adicionar/remover, permite editar

'nome' in pessoa;       // true
pessoa.hasOwnProperty('nome'); // true

// Métodos de String
const texto = "  Hello, World!  ";

texto.trim();           // "Hello, World!"
texto.toLowerCase();    // "  hello, world!  "
texto.toUpperCase();    // "  HELLO, WORLD!  "

texto.includes('World'); // true
texto.startsWith('  He'); // true
texto.endsWith('!  ');   // true

texto.indexOf('o');      // 4 (primeira ocorrência)
texto.lastIndexOf('o');  // 9 (última ocorrência)

texto.slice(2, 7);       // "Hello"
texto.substring(2, 7);   // "Hello"

texto.replace('World', 'JS');  // "  Hello, JS!  " (primeira)
texto.replaceAll('l', 'L');    // "  HeLLo, WorLd!  "

texto.split(', ');       // ['  Hello', 'World!  ']
'a-b-c'.split('-');      // ['a', 'b', 'c']

'abc'.repeat(3);         // 'abcabcabc'
'5'.padStart(3, '0');    // '005'
'5'.padEnd(3, '0');      // '500'

// Template Literals
const nome = 'Ana';
\`Olá, \${nome}!\`;       // "Olá, Ana!"
\`Linha 1
Linha 2\`;               // Multiline
`
    },
    {
      title: 'JavaScript: Desestruturação e Spread',
      content: `
// Desestruturação de Objeto
const usuario = { nome: 'Ana', idade: 25, email: 'ana@mail.com' };

const { nome, idade } = usuario;
const { nome: nomeUsuario } = usuario;  // Renomear
const { cidade = 'Não informada' } = usuario; // Valor padrão
const { nome, ...resto } = usuario; // Rest: { idade: 25, email: '...' }

// Desestruturação de Array
const cores = ['vermelho', 'verde', 'azul'];

const [primeira, segunda] = cores;
const [, , terceira] = cores;  // Pular elementos
const [primeiraCor, ...outrasCores] = cores; // Rest

// Desestruturação em Parâmetros de Função
function saudacao({ nome, idade = 18 }) {
  return \`\${nome} tem \${idade} anos\`;
}
saudacao({ nome: 'Ana', idade: 25 });

// Spread Operator (...)
// Em Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinado = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]
const copia = [...arr1];               // Cópia superficial

// Em Objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };   // { a: 1, b: 2, c: 3, d: 4 }
const atualizado = { ...obj1, b: 10 }; // { a: 1, b: 10 }

// Em Chamadas de Função
const numeros = [1, 5, 3, 9, 2];
Math.max(...numeros);  // 9

// Clonagem Profunda (para objetos aninhados)
const clone = JSON.parse(JSON.stringify(objetoAninhado));
const cloneModerno = structuredClone(objetoAninhado); // API moderna
`
    },
    {
      title: 'JavaScript: Módulos ES6',
      content: `
// ===== arquivo: utils.js =====

// Named Exports
export const PI = 3.14159;
export function somar(a, b) {
  return a + b;
}
export const multiplicar = (a, b) => a * b;

// Export de classe
export class Calculadora {
  static dobrar(n) {
    return n * 2;
  }
}

// Default Export (apenas um por arquivo)
const funcaoPrincipal = () => {
  console.log('Função principal');
};
export default funcaoPrincipal;


// ===== arquivo: main.js =====

// Named Imports
import { PI, somar, multiplicar } from './utils.js';
import { somar as soma } from './utils.js';  // Renomear

// Default Import (pode usar qualquer nome)
import minhaFuncao from './utils.js';

// Import tudo como namespace
import * as Utils from './utils.js';
Utils.somar(1, 2);
Utils.PI;

// Import dinâmico (async)
const carregarModulo = async () => {
  const modulo = await import('./utils.js');
  modulo.somar(1, 2);
};

// Re-exportar
export { somar, multiplicar } from './utils.js';
export * from './utils.js';
export { default } from './utils.js';
`
    },
    {
      title: 'TypeScript: Tipos Utilitários',
      content: `
interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  ativo: boolean;
}

// Partial<T> - Torna todas as propriedades opcionais
type UsuarioParcial = Partial<Usuario>;
// { id?: number; nome?: string; ... }

// Required<T> - Torna todas as propriedades obrigatórias
type UsuarioCompleto = Required<UsuarioParcial>;

// Readonly<T> - Torna todas as propriedades somente leitura
type UsuarioImutavel = Readonly<Usuario>;

// Pick<T, K> - Seleciona apenas algumas propriedades
type UsuarioPublico = Pick<Usuario, 'id' | 'nome'>;
// { id: number; nome: string }

// Omit<T, K> - Exclui propriedades
type UsuarioSemSenha = Omit<Usuario, 'senha'>;

// Record<K, T> - Cria tipo com chaves K e valores T
type UsuariosPorId = Record<number, Usuario>;
// { [id: number]: Usuario }

// Exclude<T, U> - Exclui tipos de uma união
type Status = 'ativo' | 'inativo' | 'pendente';
type StatusAtivo = Exclude<Status, 'inativo'>; // 'ativo' | 'pendente'

// Extract<T, U> - Extrai tipos que são atribuíveis a U
type Eventos = 'click' | 'scroll' | 'mousemove';
type EventosMouse = Extract<Eventos, 'click' | 'mousemove'>; // 'click' | 'mousemove'

// NonNullable<T> - Remove null e undefined
type Valor = string | null | undefined;
type ValorDefinido = NonNullable<Valor>; // string

// ReturnType<T> - Tipo de retorno de uma função
function getUsuario() { return { nome: 'Ana', id: 1 }; }
type TipoRetorno = ReturnType<typeof getUsuario>;
// { nome: string; id: number }

// Parameters<T> - Tipos dos parâmetros de uma função
type Params = Parameters<typeof getUsuario>; // []
`
    },
    {
      title: 'TypeScript: Type Guards e Narrowing',
      content: `
// Type Guards - Funções que refinam tipos

// typeof guard
function processarValor(valor: string | number) {
  if (typeof valor === 'string') {
    return valor.toUpperCase(); // valor é string aqui
  }
  return valor.toFixed(2); // valor é number aqui
}

// instanceof guard
class Cachorro { latir() { return 'Au!'; } }
class Gato { miar() { return 'Miau!'; } }

function fazerSom(animal: Cachorro | Gato) {
  if (animal instanceof Cachorro) {
    return animal.latir();
  }
  return animal.miar();
}

// in operator guard
interface Ave { voar(): void; }
interface Peixe { nadar(): void; }

function mover(animal: Ave | Peixe) {
  if ('voar' in animal) {
    animal.voar();
  } else {
    animal.nadar();
  }
}

// Custom Type Guard (is)
interface Carro { tipo: 'carro'; rodas: 4; }
interface Moto { tipo: 'moto'; rodas: 2; }

function isCarro(veiculo: Carro | Moto): veiculo is Carro {
  return veiculo.tipo === 'carro';
}

function descreverVeiculo(veiculo: Carro | Moto) {
  if (isCarro(veiculo)) {
    console.log(\`Carro com \${veiculo.rodas} rodas\`);
  }
}

// Discriminated Unions
type Forma =
  | { tipo: 'circulo'; raio: number }
  | { tipo: 'retangulo'; largura: number; altura: number };

function calcularArea(forma: Forma): number {
  switch (forma.tipo) {
    case 'circulo':
      return Math.PI * forma.raio ** 2;
    case 'retangulo':
      return forma.largura * forma.altura;
  }
}
`
    },
    {
      title: 'TypeScript: Generics Avançados',
      content: `
// Função genérica básica
function identity<T>(arg: T): T {
  return arg;
}

// Constraints (restrições)
interface ComId { id: number; }

function buscarPorId<T extends ComId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

// Múltiplos parâmetros de tipo
function mapear<T, U>(array: T[], fn: (item: T) => U): U[] {
  return array.map(fn);
}

// keyof - Chaves de um tipo
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Tipo condicional
type IsString<T> = T extends string ? true : false;
type Resultado = IsString<'hello'>; // true

// infer - Inferir tipo dentro de condicional
type ElementoDeArray<T> = T extends (infer U)[] ? U : never;
type Elem = ElementoDeArray<string[]>; // string

// Generic com valor padrão
interface Resposta<T = string> {
  dados: T;
  sucesso: boolean;
}

// Mapped Types com generics
type Opcional<T> = {
  [P in keyof T]?: T[P];
};

type SomenteLeitura<T> = {
  readonly [P in keyof T]: T[P];
};

// Template Literal Types
type Evento = 'click' | 'focus';
type Handler = \`on\${Capitalize<Evento>}\`; // 'onClick' | 'onFocus'

// Utility type personalizado
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
`
    },
    {
      title: 'Next.js: App Router (v13+)',
      content: `
// Estrutura de pastas do App Router
// app/
//   layout.tsx      - Layout raiz
//   page.tsx        - Rota /
//   loading.tsx     - UI de carregamento
//   error.tsx       - UI de erro
//   not-found.tsx   - Página 404
//   blog/
//     page.tsx      - Rota /blog
//     [slug]/
//       page.tsx    - Rota /blog/:slug

// app/layout.tsx - Layout raiz
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <nav>Menu</nav>
        {children}
        <footer>Rodapé</footer>
      </body>
    </html>
  );
}

// app/page.tsx - Página inicial
export default function Home() {
  return <h1>Bem-vindo</h1>;
}

// app/blog/[slug]/page.tsx - Rota dinâmica
interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}

export default function Post({ params, searchParams }: PageProps) {
  return <h1>Post: {params.slug}</h1>;
}

// Gerar páginas estáticas para rotas dinâmicas
export async function generateStaticParams() {
  const posts = await fetch('/api/posts').then(r => r.json());
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

// Metadata para SEO
export const metadata = {
  title: 'Meu Blog',
  description: 'Descrição do blog',
};
`
    },
    {
      title: 'Next.js: Server e Client Components',
      content: `
// Por padrão, componentes no App Router são Server Components

// app/usuarios/page.tsx - Server Component
async function getUsuarios() {
  const res = await fetch('https://api.example.com/usuarios', {
    next: { revalidate: 3600 } // Revalidar a cada hora
  });
  return res.json();
}

export default async function UsuariosPage() {
  const usuarios = await getUsuarios();
  
  return (
    <ul>
      {usuarios.map((u: { id: number; nome: string }) => (
        <li key={u.id}>{u.nome}</li>
      ))}
    </ul>
  );
}

// components/Botao.tsx - Client Component
'use client'; // Diretiva obrigatória para Client Components

import { useState } from 'react';

export default function Botao() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicado {count} vezes
    </button>
  );
}

// Padrão: Passar Server Data para Client Component
// app/dashboard/page.tsx
import Grafico from '@/components/Grafico';

export default async function Dashboard() {
  const dados = await fetch('/api/stats').then(r => r.json());
  
  // Passa dados do servidor para componente cliente
  return <Grafico dados={dados} />;
}

// components/Grafico.tsx
'use client';
export default function Grafico({ dados }: { dados: number[] }) {
  // Usar dados para renderizar gráfico interativo
  return <div>...</div>;
}
`
    },
    {
      title: 'Next.js: API Routes e Server Actions',
      content: `
// app/api/usuarios/route.ts - API Route (App Router)
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  const usuarios = [{ id: 1, nome: 'Ana' }];
  return NextResponse.json(usuarios);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // Criar usuário no banco...
  
  return NextResponse.json(
    { mensagem: 'Usuário criado' },
    { status: 201 }
  );
}

// app/api/usuarios/[id]/route.ts - Rota dinâmica
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const usuario = { id: params.id, nome: 'Ana' };
  return NextResponse.json(usuario);
}

// Server Actions (v14+)
// app/actions.ts
'use server';

export async function criarPost(formData: FormData) {
  const titulo = formData.get('titulo') as string;
  
  // Salvar no banco de dados...
  
  return { sucesso: true };
}

// app/novo-post/page.tsx
import { criarPost } from './actions';

export default function NovoPost() {
  return (
    <form action={criarPost}>
      <input name="titulo" required />
      <button type="submit">Criar</button>
    </form>
  );
}
`
    },
    {
      title: 'Next.js: Data Fetching e Caching',
      content: `
// Fetch com cache padrão (Server Component)
async function getDados() {
  // Cache padrão: força cache estático
  const res = await fetch('https://api.example.com/dados');
  return res.json();
}

// Sem cache (sempre busca dados frescos)
async function getDadosAtualizados() {
  const res = await fetch('https://api.example.com/dados', {
    cache: 'no-store'
  });
  return res.json();
}

// Revalidação baseada em tempo (ISR)
async function getDadosComRevalidacao() {
  const res = await fetch('https://api.example.com/dados', {
    next: { revalidate: 60 } // Revalida a cada 60 segundos
  });
  return res.json();
}

// Revalidação por tags
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    next: { tags: ['posts'] }
  });
  return res.json();
}

// Revalidar tag via Server Action
'use server';
import { revalidateTag, revalidatePath } from 'next/cache';

export async function atualizarPosts() {
  // Revalida todos os fetches com tag 'posts'
  revalidateTag('posts');
  
  // Ou revalida uma rota específica
  revalidatePath('/blog');
}

// Parallel Data Fetching
async function Page() {
  // Busca em paralelo
  const [usuarios, posts] = await Promise.all([
    getUsuarios(),
    getPosts()
  ]);
  
  return <div>...</div>;
}
`
    },
    {
      title: 'TailwindCSS: Sistema de Espaçamento',
      content: `
<!-- Escala de Espaçamento (1 unidade = 0.25rem = 4px) -->
<!-- p-1 = 4px, p-2 = 8px, p-4 = 16px, p-8 = 32px, p-16 = 64px -->

<!-- Padding -->
<div class="p-4">Padding em todos os lados</div>
<div class="px-4 py-2">Padding horizontal e vertical</div>
<div class="pt-4 pr-2 pb-4 pl-2">Padding individual</div>

<!-- Margin -->
<div class="m-4">Margin em todos os lados</div>
<div class="mx-auto">Margin horizontal auto (centralizar)</div>
<div class="mt-8 mb-4">Margin top e bottom</div>
<div class="-mt-4">Margin negativo (sobe o elemento)</div>

<!-- Space Between (para flex/grid containers) -->
<div class="flex space-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="flex flex-col space-y-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Gap (alternativa moderna para space) -->
<div class="flex gap-4">Espaço igual entre items</div>
<div class="grid gap-x-4 gap-y-2">Gaps diferentes</div>

<!-- Width e Height -->
<div class="w-full h-screen">Largura total, altura da tela</div>
<div class="w-1/2 h-64">50% largura, 256px altura</div>
<div class="min-w-0 max-w-md">Largura mín e máx</div>
<div class="w-fit">Largura do conteúdo</div>

<!-- Aspect Ratio -->
<div class="aspect-video">Proporção 16:9</div>
<div class="aspect-square">Proporção 1:1</div>
`
    },
    {
      title: 'TailwindCSS: Tipografia e Cores',
      content: `
<!-- Tamanho de Fonte -->
<p class="text-xs">Extra pequeno (12px)</p>
<p class="text-sm">Pequeno (14px)</p>
<p class="text-base">Base (16px)</p>
<p class="text-lg">Grande (18px)</p>
<p class="text-xl">Extra grande (20px)</p>
<p class="text-2xl">2x grande (24px)</p>
<p class="text-4xl">4x grande (36px)</p>

<!-- Peso da Fonte -->
<p class="font-thin">Thin (100)</p>
<p class="font-light">Light (300)</p>
<p class="font-normal">Normal (400)</p>
<p class="font-medium">Medium (500)</p>
<p class="font-semibold">Semibold (600)</p>
<p class="font-bold">Bold (700)</p>

<!-- Alinhamento e Decoração -->
<p class="text-left">Esquerda</p>
<p class="text-center">Centro</p>
<p class="text-right">Direita</p>
<p class="underline">Sublinhado</p>
<p class="line-through">Riscado</p>
<p class="uppercase">MAIÚSCULAS</p>
<p class="capitalize">Capitalizado</p>

<!-- Cores de Texto -->
<p class="text-gray-500">Cinza médio</p>
<p class="text-blue-600">Azul</p>
<p class="text-red-500">Vermelho</p>
<p class="text-green-700">Verde escuro</p>

<!-- Cores de Fundo -->
<div class="bg-white">Fundo branco</div>
<div class="bg-gray-100">Cinza claro</div>
<div class="bg-blue-500">Azul</div>
<div class="bg-gradient-to-r from-blue-500 to-purple-500">Gradiente</div>

<!-- Opacidade -->
<div class="bg-blue-500/50">50% opacidade</div>
<p class="text-black/75">75% opacidade</p>
`
    },
    {
      title: 'TailwindCSS: Componentes Comuns',
      content: `
<!-- Botão Primário -->
<button class="
  bg-blue-500 hover:bg-blue-600 
  text-white font-semibold 
  py-2 px-4 
  rounded-lg 
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Botão
</button>

<!-- Card -->
<div class="
  bg-white dark:bg-gray-800
  rounded-xl shadow-lg
  p-6
  border border-gray-200 dark:border-gray-700
">
  <h3 class="text-xl font-bold mb-2">Título do Card</h3>
  <p class="text-gray-600 dark:text-gray-300">Conteúdo do card...</p>
</div>

<!-- Input -->
<input class="
  w-full
  px-4 py-2
  border border-gray-300 rounded-lg
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
  placeholder-gray-400
" placeholder="Digite algo...">

<!-- Badge/Tag -->
<span class="
  inline-flex items-center
  px-2.5 py-0.5
  rounded-full
  text-xs font-medium
  bg-green-100 text-green-800
">
  Ativo
</span>

<!-- Avatar -->
<img class="
  w-10 h-10
  rounded-full
  object-cover
  ring-2 ring-white
" src="avatar.jpg" alt="Avatar">

<!-- Lista com Hover -->
<ul class="divide-y divide-gray-200">
  <li class="py-3 px-4 hover:bg-gray-50 cursor-pointer transition-colors">
    Item 1
  </li>
  <li class="py-3 px-4 hover:bg-gray-50 cursor-pointer transition-colors">
    Item 2
  </li>
</ul>
`
    },
    {
      title: 'TailwindCSS: Responsividade e Dark Mode',
      content: `
<!-- Breakpoints -->
<!-- sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px -->

<!-- Mobile First (padrão é mobile, adiciona para telas maiores) -->
<div class="
  text-sm         /* Mobile: texto pequeno */
  md:text-base    /* Tablet: texto normal */
  lg:text-lg      /* Desktop: texto grande */
">
  Texto responsivo
</div>

<!-- Grid Responsivo -->
<div class="
  grid 
  grid-cols-1        /* 1 coluna no mobile */
  sm:grid-cols-2     /* 2 colunas em sm */
  lg:grid-cols-3     /* 3 colunas em lg */
  xl:grid-cols-4     /* 4 colunas em xl */
  gap-4
">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>

<!-- Ocultar/Mostrar por Breakpoint -->
<div class="hidden md:block">Visível apenas em md+</div>
<div class="block md:hidden">Visível apenas em mobile</div>

<!-- Dark Mode -->
<!-- Habilitar em tailwind.config.js: darkMode: 'class' ou 'media' -->
<div class="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-white
  border border-gray-200 dark:border-gray-700
">
  Suporta modo escuro
</div>

<!-- Hover, Focus e States -->
<button class="
  bg-blue-500
  hover:bg-blue-600
  active:bg-blue-700
  focus:ring-2 focus:ring-blue-500
  disabled:opacity-50
  group-hover:text-white   /* Quando o pai com 'group' tem hover */
">
  Estados
</button>
`
    },
    {
      title: 'Angular: Services e Injeção de Dependência',
      content: `
// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

// Serviço injetável em toda a aplicação
@Injectable({
  providedIn: 'root' // Singleton global
})
export class UserService {
  private apiUrl = 'https://api.example.com/users';
  
  // BehaviorSubject para estado reativo
  private usuarioAtual = new BehaviorSubject<User | null>(null);
  usuarioAtual$ = this.usuarioAtual.asObservable();
  
  constructor(private http: HttpClient) {}
  
  // Método que retorna Observable
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`);
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  
  setUsuarioAtual(user: User) {
    this.usuarioAtual.next(user);
  }
}

// user.component.ts - Usando o serviço
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  template: \`
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  \`
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
`
    },
    {
      title: 'Angular: Diretivas Built-in',
      content: `
<!-- *ngIf - Renderização condicional -->
<div *ngIf="isLoggedIn">Bem-vindo!</div>
<div *ngIf="isLoggedIn; else loginTemplate">Logado</div>
<ng-template #loginTemplate>
  <button>Fazer Login</button>
</ng-template>

<!-- *ngIf com variável local -->
<div *ngIf="user$ | async as user">
  Olá, {{ user.name }}
</div>

<!-- *ngFor - Loop -->
<ul>
  <li *ngFor="let item of items; let i = index; let first = first; let last = last">
    {{ i + 1 }}. {{ item.name }}
    <span *ngIf="first">(Primeiro)</span>
  </li>
</ul>

<!-- *ngFor com trackBy para performance -->
<li *ngFor="let item of items; trackBy: trackById">
  {{ item.name }}
</li>
<!-- No componente: trackById(index: number, item: Item) { return item.id; } -->

<!-- [ngSwitch] - Switch case -->
<div [ngSwitch]="status">
  <p *ngSwitchCase="'ativo'">Usuário ativo</p>
  <p *ngSwitchCase="'inativo'">Usuário inativo</p>
  <p *ngSwitchDefault>Status desconhecido</p>
</div>

<!-- [ngClass] - Classes condicionais -->
<div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }"></div>
<div [ngClass]="['class1', 'class2']"></div>
<div [class.active]="isActive"></div>

<!-- [ngStyle] - Estilos inline condicionais -->
<div [ngStyle]="{ 'color': isError ? 'red' : 'green' }"></div>
<div [style.fontSize.px]="tamanho"></div>
`
    },
    {
      title: 'Angular: Pipes',
      content: `
<!-- Pipes Built-in -->

<!-- Texto -->
{{ 'hello world' | uppercase }}     <!-- HELLO WORLD -->
{{ 'HELLO WORLD' | lowercase }}     <!-- hello world -->
{{ 'hello world' | titlecase }}     <!-- Hello World -->

<!-- Números -->
{{ 3.14159 | number:'1.2-2' }}      <!-- 3.14 (mín 1 inteiro, 2-2 decimais) -->
{{ 0.25 | percent }}                 <!-- 25% -->
{{ 1234.5 | currency:'BRL' }}       <!-- R$1,234.50 -->

<!-- Datas -->
{{ dataAtual | date }}               <!-- Jan 15, 2024 -->
{{ dataAtual | date:'short' }}       <!-- 1/15/24, 10:30 AM -->
{{ dataAtual | date:'fullDate' }}    <!-- Monday, January 15, 2024 -->
{{ dataAtual | date:'dd/MM/yyyy' }}  <!-- 15/01/2024 -->
{{ dataAtual | date:'HH:mm:ss' }}    <!-- 10:30:45 -->

<!-- JSON (debug) -->
{{ objeto | json }}

<!-- Async (subscribe automático) -->
{{ observable$ | async }}
<div *ngIf="usuario$ | async as usuario">
  {{ usuario.nome }}
</div>

<!-- Slice (array/string) -->
{{ [1,2,3,4,5] | slice:1:3 }}        <!-- [2,3] -->
{{ 'Hello World' | slice:0:5 }}     <!-- Hello -->

<!-- KeyValue (para objetos) -->
<div *ngFor="let item of objeto | keyvalue">
  {{ item.key }}: {{ item.value }}
</div>

<!-- Pipe Personalizado -->
// truncate.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 50): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
// Uso: {{ textoLongo | truncate:100 }}
`
    },
    {
      title: 'Angular: RxJS e Observables',
      content: `
import { Observable, of, from, interval, Subject, BehaviorSubject } from 'rxjs';
import { map, filter, tap, catchError, switchMap, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// Criando Observables
const numeros$ = of(1, 2, 3, 4, 5);
const array$ = from([1, 2, 3]);
const intervalo$ = interval(1000); // Emite a cada segundo

// Operadores comuns
numeros$.pipe(
  filter(n => n % 2 === 0),  // Filtra pares
  map(n => n * 10),          // Multiplica por 10
  tap(n => console.log(n))   // Side effect (debug)
).subscribe(resultado => console.log(resultado));

// HTTP com RxJS
this.http.get<User[]>('/api/users').pipe(
  map(users => users.filter(u => u.active)),
  catchError(error => {
    console.error('Erro:', error);
    return of([]); // Retorna array vazio em caso de erro
  })
).subscribe(users => this.users = users);

// switchMap - Cancela requisição anterior
this.searchInput.valueChanges.pipe(
  debounceTime(300),           // Espera 300ms após parar de digitar
  distinctUntilChanged(),      // Ignora se valor não mudou
  switchMap(termo => this.http.get(\`/api/search?q=\${termo}\`))
).subscribe(resultados => this.resultados = resultados);

// Subject para eventos
private destroy$ = new Subject<void>();

ngOnInit() {
  this.dados$.pipe(
    takeUntil(this.destroy$)  // Cancela quando destroy$ emitir
  ).subscribe(dados => this.dados = dados);
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}

// BehaviorSubject para estado
private _estado$ = new BehaviorSubject<Estado>(estadoInicial);
estado$ = this._estado$.asObservable();

atualizarEstado(novoEstado: Estado) {
  this._estado$.next(novoEstado);
}
`
    },
    {
      title: 'Angular: Formulários Reativos',
      content: `
// app.module.ts
import { ReactiveFormsModule } from '@angular/forms';

// user-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  template: \`
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <input formControlName="nome" placeholder="Nome">
      <div *ngIf="userForm.get('nome')?.errors?.['required'] && userForm.get('nome')?.touched">
        Nome é obrigatório
      </div>
      
      <input formControlName="email" placeholder="Email">
      <div *ngIf="userForm.get('email')?.errors?.['email']">
        Email inválido
      </div>
      
      <!-- Grupo aninhado -->
      <div formGroupName="endereco">
        <input formControlName="rua" placeholder="Rua">
        <input formControlName="cidade" placeholder="Cidade">
      </div>
      
      <!-- FormArray -->
      <div formArrayName="telefones">
        <div *ngFor="let tel of telefones.controls; let i = index">
          <input [formControlName]="i" placeholder="Telefone">
          <button type="button" (click)="removerTelefone(i)">X</button>
        </div>
        <button type="button" (click)="adicionarTelefone()">+ Telefone</button>
      </div>
      
      <button type="submit" [disabled]="userForm.invalid">Salvar</button>
    </form>
  \`
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: this.fb.group({
        rua: [''],
        cidade: ['']
      }),
      telefones: this.fb.array([])
    });
  }
  
  get telefones() {
    return this.userForm.get('telefones') as FormArray;
  }
  
  adicionarTelefone() {
    this.telefones.push(this.fb.control(''));
  }
  
  removerTelefone(index: number) {
    this.telefones.removeAt(index);
  }
  
  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
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