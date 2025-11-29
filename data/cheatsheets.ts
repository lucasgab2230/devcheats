
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
    {
      title: 'C: Fundamentos e Ponteiros',
      content: `
// Estrutura básica de um programa C
#include <stdio.h>

int main() {
    // Variáveis e tipos
    int idade = 25;
    float altura = 1.75;
    char inicial = 'A';
    char nome[] = "Carlos";
    
    printf("Nome: %s, Idade: %d\\n", nome, idade);
    
    // Ponteiros
    int *ptr = &idade;
    printf("Valor: %d, Endereço: %p\\n", *ptr, (void*)ptr);
    
    // Arrays
    int numeros[5] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; i++) {
        printf("%d ", numeros[i]);
    }
    
    return 0;
}

// Structs
struct Pessoa {
    char nome[50];
    int idade;
};

struct Pessoa p1 = {"Maria", 30};
`,
    },
    {
      title: 'C++: Classes e STL',
      content: `
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

// Classes em C++
class Retangulo {
private:
    double largura, altura;
    
public:
    // Construtor
    Retangulo(double l, double a) : largura(l), altura(a) {}
    
    // Métodos
    double area() const { return largura * altura; }
    double perimetro() const { return 2 * (largura + altura); }
};

int main() {
    // STL - Vector
    vector<int> nums = {5, 2, 8, 1, 9};
    
    // Ordenar
    sort(nums.begin(), nums.end());
    
    // Iterar
    for (const auto& n : nums) {
        cout << n << " ";
    }
    
    // Objeto
    Retangulo r(10, 5);
    cout << "Área: " << r.area() << endl;
    
    return 0;
}
`,
    },
    {
      title: 'C#: Fundamentos e LINQ',
      content: `
using System;
using System.Linq;
using System.Collections.Generic;

// Classe principal
class Program {
    static void Main() {
        // Variáveis
        string nome = "C#";
        int versao = 12;
        var lista = new List<int> { 1, 2, 3, 4, 5 };
        
        // LINQ - Consultas
        var pares = lista.Where(x => x % 2 == 0);
        var dobrados = lista.Select(x => x * 2);
        var soma = lista.Sum();
        
        Console.WriteLine($"Soma: {soma}");
        
        // Classes
        var pessoa = new Pessoa("Ana", 25);
        Console.WriteLine(pessoa.Apresentar());
    }
}

// Classe com propriedades
class Pessoa {
    public string Nome { get; set; }
    public int Idade { get; set; }
    
    public Pessoa(string nome, int idade) {
        Nome = nome;
        Idade = idade;
    }
    
    public string Apresentar() => $"Olá, sou {Nome}!";
}
`,
    },
    {
      title: 'Kotlin: Fundamentos',
      content: `
// Função principal
fun main() {
    // Variáveis (val = imutável, var = mutável)
    val nome: String = "Kotlin"
    var contador = 0
    
    // Null Safety
    var nullable: String? = null
    val tamanho = nullable?.length ?: 0 // Elvis operator
    
    // Funções
    println(somar(5, 3))
    println(saudar("Mundo"))
    
    // Data Classes
    val pessoa = Pessoa("Ana", 25)
    println(pessoa)
    
    // Collections
    val numeros = listOf(1, 2, 3, 4, 5)
    val pares = numeros.filter { it % 2 == 0 }
    val dobrados = numeros.map { it * 2 }
}

// Função com expressão
fun somar(a: Int, b: Int) = a + b

// Função com parâmetro padrão
fun saudar(nome: String = "Amigo") = "Olá, $nome!"

// Data Class (gera equals, hashCode, toString, copy)
data class Pessoa(val nome: String, val idade: Int)
`,
    },
    {
      title: 'Swift: Fundamentos',
      content: `
import Foundation

// Variáveis e Constantes
let constante = "Não muda"
var variavel = "Pode mudar"

// Tipos
let inteiro: Int = 42
let decimal: Double = 3.14
let booleano: Bool = true
let array: [String] = ["a", "b", "c"]
let dicionario: [String: Int] = ["um": 1, "dois": 2]

// Optionals
var opcional: String? = nil
opcional = "Agora tem valor"

// Unwrapping
if let valor = opcional {
    print("Valor: \\(valor)")
}

// Guard
func processar(valor: String?) {
    guard let v = valor else {
        print("Valor é nil")
        return
    }
    print("Processando: \\(v)")
}

// Funções
func saudar(nome: String, com saudacao: String = "Olá") -> String {
    return "\\(saudacao), \\(nome)!"
}

// Closures
let dobrar = { (n: Int) -> Int in n * 2 }
let nums = [1, 2, 3].map { $0 * 2 }
`,
    },
    {
      title: 'Swift: Classes e Structs',
      content: `
// Struct (tipo por valor)
struct Ponto {
    var x: Double
    var y: Double
    
    // Método
    func distanciaOrigem() -> Double {
        return (x * x + y * y).squareRoot()
    }
    
    // Método mutating (modifica self)
    mutating func mover(dx: Double, dy: Double) {
        x += dx
        y += dy
    }
}

// Class (tipo por referência)
class Veiculo {
    var velocidade: Double = 0
    
    func acelerar() {
        velocidade += 10
    }
}

// Herança
class Carro: Veiculo {
    var marchas: Int = 6
    
    override func acelerar() {
        super.acelerar()
        velocidade += 5
    }
}

// Protocolos (similar a interfaces)
protocol Descritivel {
    var descricao: String { get }
}

extension Ponto: Descritivel {
    var descricao: String {
        return "(\\(x), \\(y))"
    }
}
`,
    },
    {
      title: 'Scala: Fundamentos',
      content: `
// Objeto principal
object Main extends App {
  // Variáveis (val = imutável, var = mutável)
  val nome: String = "Scala"
  var contador = 0
  
  // Funções
  def somar(a: Int, b: Int): Int = a + b
  
  // Funções anônimas
  val dobrar = (x: Int) => x * 2
  
  // Collections
  val lista = List(1, 2, 3, 4, 5)
  val pares = lista.filter(_ % 2 == 0)
  val dobrados = lista.map(_ * 2)
  val soma = lista.reduce(_ + _)
  
  println(s"Soma: $soma")
}

// Case Classes (imutáveis por padrão)
case class Pessoa(nome: String, idade: Int)

val p1 = Pessoa("Ana", 25)
val p2 = p1.copy(idade = 26)

// Pattern Matching
def descrever(x: Any): String = x match {
  case 0 => "zero"
  case i: Int if i > 0 => "positivo"
  case s: String => s"string: $s"
  case _ => "desconhecido"
}

// Traits (similar a interfaces)
trait Saudavel {
  def saudar(): String = "Olá!"
}
`,
    },
    {
      title: 'PHP: Fundamentos',
      content: `
<?php
// Variáveis (tipagem dinâmica)
$nome = "PHP";
$versao = 8.3;
$ativo = true;
$frutas = ["maçã", "banana", "laranja"];

// Arrays associativos
$pessoa = [
    "nome" => "João",
    "idade" => 30
];

// Estruturas de controle
if ($versao >= 8) {
    echo "PHP moderno!\\n";
}

// Loops
foreach ($frutas as $fruta) {
    echo "$fruta\\n";
}

// Funções
function saudar(string $nome): string {
    return "Olá, $nome!";
}

echo saudar("Mundo");

// Arrow functions (PHP 7.4+)
$dobrar = fn($n) => $n * 2;

// Null coalescing
$valor = $pessoa["email"] ?? "Não informado";

// Classes
class Usuario {
    public function __construct(
        private string $nome,
        private int $idade
    ) {}
    
    public function getNome(): string {
        return $this->nome;
    }
}
?>
`,
    },
    {
      title: 'Perl: Fundamentos',
      content: `
#!/usr/bin/perl
use strict;
use warnings;

# Variáveis escalares ($)
my $nome = "Perl";
my $numero = 42;

# Arrays (@)
my @frutas = ("maçã", "banana", "laranja");
push @frutas, "uva";
my $primeira = $frutas[0];

# Hashes (%)
my %pessoa = (
    nome => "João",
    idade => 30
);
print "Nome: $pessoa{nome}\\n";

# Estruturas de controle
if ($numero > 40) {
    print "Maior que 40\\n";
}

# Loops
foreach my $fruta (@frutas) {
    print "$fruta\\n";
}

for my $i (1..5) {
    print "$i ";
}

# Subrotinas
sub saudar {
    my ($nome) = @_;
    return "Olá, $nome!";
}

print saudar("Mundo");

# Expressões regulares
my $texto = "O rato roeu a roupa";
if ($texto =~ /rato/) {
    print "Encontrou 'rato'\\n";
}
$texto =~ s/rato/gato/g; # Substituição
`,
    },
    {
      title: 'Lua: Fundamentos',
      content: `
-- Comentário de linha

--[[
  Comentário
  de bloco
]]

-- Variáveis (escopo global por padrão)
local nome = "Lua"
local numero = 42
local ativo = true

-- Tabelas (estrutura de dados universal)
local frutas = {"maçã", "banana", "laranja"}
print(frutas[1]) -- Índices começam em 1

local pessoa = {
    nome = "João",
    idade = 30
}
print(pessoa.nome)

-- Estruturas de controle
if numero > 40 then
    print("Maior que 40")
elseif numero == 40 then
    print("Igual a 40")
else
    print("Menor que 40")
end

-- Loops
for i = 1, 5 do
    print(i)
end

for i, fruta in ipairs(frutas) do
    print(i, fruta)
end

-- Funções
local function saudar(nome)
    return "Olá, " .. nome .. "!"
end

-- Funções são valores
local dobrar = function(n)
    return n * 2
end

-- Closures
local function contador()
    local count = 0
    return function()
        count = count + 1
        return count
    end
end
`,
    },
    {
      title: 'Haskell: Fundamentos',
      content: `
-- Tipos básicos
nome :: String
nome = "Haskell"

numero :: Int
numero = 42

decimal :: Double
decimal = 3.14

-- Listas
numeros :: [Int]
numeros = [1, 2, 3, 4, 5]

-- Concatenação
lista = [1, 2] ++ [3, 4]  -- [1, 2, 3, 4]
cons = 0 : numeros        -- [0, 1, 2, 3, 4, 5]

-- Funções
somar :: Int -> Int -> Int
somar a b = a + b

-- Função com guards
absoluto :: Int -> Int
absoluto n
    | n < 0     = -n
    | otherwise = n

-- Pattern matching
fatorial :: Int -> Int
fatorial 0 = 1
fatorial n = n * fatorial (n - 1)

-- List comprehension
pares = [x | x <- [1..10], x \`mod\` 2 == 0]

-- Map, filter, fold
dobrados = map (*2) numeros
positivos = filter (>0) [-2, -1, 0, 1, 2]
soma = foldl (+) 0 numeros

-- Tipos algébricos
data Cor = Vermelho | Verde | Azul

data Maybe a = Nothing | Just a

-- Funções de ordem superior
aplicar :: (a -> b) -> a -> b
aplicar f x = f x
`,
    },
    {
      title: 'Elixir: Fundamentos',
      content: `
# Variáveis (imutáveis)
nome = "Elixir"
numero = 42

# Tipos básicos
lista = [1, 2, 3, 4, 5]
tupla = {:ok, "sucesso"}
mapa = %{nome: "João", idade: 30}

# Pattern matching
{:ok, resultado} = {:ok, "dados"}
[cabeca | cauda] = [1, 2, 3, 4]

# Funções anônimas
dobrar = fn x -> x * 2 end
dobrar.(5)  # => 10

# Pipe operator
resultado = [1, 2, 3]
  |> Enum.map(&(&1 * 2))
  |> Enum.filter(&(&1 > 2))
  |> Enum.sum()

# Módulos e funções
defmodule Calculadora do
  def somar(a, b), do: a + b
  
  def fatorial(0), do: 1
  def fatorial(n), do: n * fatorial(n - 1)
  
  # Função privada
  defp helper(x), do: x + 1
end

# Recursão com acumulador
defmodule Lista do
  def soma(lista), do: soma(lista, 0)
  defp soma([], acc), do: acc
  defp soma([h | t], acc), do: soma(t, acc + h)
end

# Structs
defmodule Usuario do
  defstruct nome: "", idade: 0
end

usuario = %Usuario{nome: "Ana", idade: 25}
`,
    },
    {
      title: 'Clojure: Fundamentos',
      content: `
;; Definindo valores (imutáveis)
(def nome "Clojure")
(def numero 42)

;; Tipos de dados
(def lista '(1 2 3 4 5))       ; Lista ligada
(def vetor [1 2 3 4 5])        ; Vetor
(def conjunto #{1 2 3 4 5})    ; Conjunto
(def mapa {:nome "João" :idade 30}) ; Mapa

;; Funções
(defn somar [a b]
  (+ a b))

(defn saudar
  "Saúda uma pessoa"
  [nome]
  (str "Olá, " nome "!"))

;; Funções anônimas
(def dobrar #(* % 2))
(def soma (fn [a b] (+ a b)))

;; Funções de coleção
(map inc [1 2 3])              ; => (2 3 4)
(filter even? [1 2 3 4 5])     ; => (2 4)
(reduce + [1 2 3 4 5])         ; => 15

;; Threading macros
(-> 5
    (* 2)
    (+ 3))  ; => 13

(->> [1 2 3 4 5]
     (map inc)
     (filter even?)
     (reduce +))

;; Condicional
(if (> numero 40)
  "maior"
  "menor")

(cond
  (< numero 0) "negativo"
  (= numero 0) "zero"
  :else "positivo")

;; Let binding (variáveis locais)
(let [x 5
      y 10]
  (+ x y))
`,
    },
    {
      title: 'F#: Fundamentos',
      content: `
// Variáveis (imutáveis por padrão)
let nome = "F#"
let mutable contador = 0  // Mutável

// Tipos
let inteiro: int = 42
let decimal: float = 3.14
let lista = [1; 2; 3; 4; 5]
let tupla = (1, "dois", 3.0)

// Funções
let somar a b = a + b
let dobrar = fun x -> x * 2

// Pipeline
let resultado =
    [1; 2; 3; 4; 5]
    |> List.filter (fun x -> x % 2 = 0)
    |> List.map (fun x -> x * 2)
    |> List.sum

// Pattern matching
let descrever x =
    match x with
    | 0 -> "zero"
    | n when n > 0 -> "positivo"
    | _ -> "negativo"

// Tipos discriminados (unions)
type Forma =
    | Circulo of raio: float
    | Retangulo of largura: float * altura: float

let area forma =
    match forma with
    | Circulo r -> System.Math.PI * r * r
    | Retangulo (l, a) -> l * a

// Records
type Pessoa = { Nome: string; Idade: int }
let pessoa = { Nome = "Ana"; Idade = 25 }
let maisVelho = { pessoa with Idade = 26 }

// Recursão
let rec fatorial n =
    if n <= 1 then 1
    else n * fatorial (n - 1)
`,
    },
    {
      title: 'TypeScript: Fundamentos Avançados',
      content: `
// Tipos básicos
let nome: string = "TypeScript";
let idade: number = 30;
let ativo: boolean = true;
let lista: number[] = [1, 2, 3];
let tupla: [string, number] = ["idade", 30];

// Enums
enum Status {
    Ativo = "ATIVO",
    Inativo = "INATIVO"
}

// Union Types
type StringOuNumero = string | number;

// Type Aliases
type Ponto = {
    x: number;
    y: number;
};

// Interfaces
interface Usuario {
    id: number;
    nome: string;
    email?: string;  // Opcional
    readonly cpf: string;  // Somente leitura
}

// Extends
interface Admin extends Usuario {
    nivel: number;
}

// Intersection Types
type Funcionario = Usuario & { cargo: string };

// Generics
function primeiro<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Type assertions
let valor: unknown = "texto";
let tamanho = (valor as string).length;

// Type guards
function isString(x: unknown): x is string {
    return typeof x === "string";
}

// Keyof
type Chaves = keyof Usuario;  // "id" | "nome" | "email" | "cpf"
`,
    },
    {
      title: 'Python: Decorators e Context Managers',
      content: `
import functools
import time

# Decorator simples
def meu_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Chamando {func.__name__}")
        resultado = func(*args, **kwargs)
        print(f"{func.__name__} retornou {resultado}")
        return resultado
    return wrapper

@meu_decorator
def somar(a, b):
    return a + b

# Decorator com parâmetros
def repetir(vezes):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(vezes):
                resultado = func(*args, **kwargs)
            return resultado
        return wrapper
    return decorator

@repetir(3)
def saudar(nome):
    print(f"Olá, {nome}!")

# Decorator para medir tempo
def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        inicio = time.time()
        resultado = func(*args, **kwargs)
        fim = time.time()
        print(f"{func.__name__} executou em {fim - inicio:.4f}s")
        return resultado
    return wrapper

# Context Manager com classe
class Arquivo:
    def __init__(self, nome, modo):
        self.nome = nome
        self.modo = modo
        
    def __enter__(self):
        self.arquivo = open(self.nome, self.modo)
        return self.arquivo
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.arquivo.close()

# Context Manager com contextlib
from contextlib import contextmanager

@contextmanager
def temporizador():
    inicio = time.time()
    yield
    print(f"Tempo: {time.time() - inicio:.4f}s")
`,
    },
    {
      title: 'Python: Async/Await',
      content: `
import asyncio
import aiohttp

# Função assíncrona básica
async def saudar():
    print("Olá")
    await asyncio.sleep(1)
    print("Mundo")

# Executar
asyncio.run(saudar())

# Múltiplas coroutines
async def tarefa(nome, segundos):
    print(f"Iniciando {nome}")
    await asyncio.sleep(segundos)
    print(f"Finalizando {nome}")
    return nome

async def main():
    # Executar em paralelo
    resultados = await asyncio.gather(
        tarefa("A", 2),
        tarefa("B", 1),
        tarefa("C", 3)
    )
    print(resultados)

# HTTP assíncrono com aiohttp
async def buscar_dados(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()

async def buscar_multiplos(urls):
    tarefas = [buscar_dados(url) for url in urls]
    return await asyncio.gather(*tarefas)

# Queue assíncrona
async def produtor(queue, n):
    for i in range(n):
        await queue.put(i)
        await asyncio.sleep(0.1)

async def consumidor(queue):
    while True:
        item = await queue.get()
        print(f"Processando: {item}")
        queue.task_done()

# Timeout
async def com_timeout():
    try:
        await asyncio.wait_for(tarefa("X", 5), timeout=2.0)
    except asyncio.TimeoutError:
        print("Timeout!")
`,
    },
    {
      title: 'Python: Type Hints',
      content: `
from typing import List, Dict, Optional, Union, Tuple, Callable
from typing import TypeVar, Generic, Protocol
from dataclasses import dataclass

# Tipos básicos
def saudar(nome: str) -> str:
    return f"Olá, {nome}!"

# Collections
def processar(items: List[int]) -> Dict[str, int]:
    return {"soma": sum(items), "count": len(items)}

# Optional (pode ser None)
def buscar(id: int) -> Optional[str]:
    return None

# Union (múltiplos tipos)
def formatar(valor: Union[int, float]) -> str:
    return f"{valor:.2f}"

# Callable (funções como parâmetros)
def aplicar(func: Callable[[int], int], valor: int) -> int:
    return func(valor)

# TypeVar (generics)
T = TypeVar('T')

def primeiro(lista: List[T]) -> Optional[T]:
    return lista[0] if lista else None

# Protocol (duck typing estrutural)
class Iteravel(Protocol):
    def __iter__(self): ...

# Dataclass com tipos
@dataclass
class Usuario:
    nome: str
    idade: int
    email: Optional[str] = None

# Generic class
class Caixa(Generic[T]):
    def __init__(self, conteudo: T) -> None:
        self.conteudo = conteudo
    
    def obter(self) -> T:
        return self.conteudo

# Alias de tipo
Coordenada = Tuple[float, float]
Matriz = List[List[int]]

def distancia(p1: Coordenada, p2: Coordenada) -> float:
    return ((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2)**0.5
`,
    },
    {
      title: 'JavaScript: Promises e Error Handling',
      content: `
// Criando uma Promise
const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = true;
    
    if (sucesso) {
        resolve("Operação bem-sucedida!");
    } else {
        reject(new Error("Algo deu errado"));
    }
});

// Consumindo Promise
minhaPromise
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro))
    .finally(() => console.log("Finalizado"));

// Encadeamento de Promises
fetch('/api/usuario')
    .then(response => response.json())
    .then(usuario => fetch(\`/api/posts/\${usuario.id}\`))
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(erro => console.error("Erro:", erro));

// Promise.all - Aguarda todas
const promises = [
    fetch('/api/a'),
    fetch('/api/b'),
    fetch('/api/c')
];

Promise.all(promises)
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(dados => console.log(dados));

// Promise.race - Primeira a resolver
Promise.race(promises).then(primeiro => console.log(primeiro));

// Promise.allSettled - Todas, mesmo com erro
Promise.allSettled(promises).then(resultados => {
    resultados.forEach(r => {
        if (r.status === 'fulfilled') {
            console.log('Sucesso:', r.value);
        } else {
            console.log('Erro:', r.reason);
        }
    });
});

// Error handling customizado
class APIError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = 'APIError';
    }
}
`,
    },
    {
      title: 'JavaScript: Classes e Herança',
      content: `
// Classe básica
class Animal {
    // Campos privados
    #id;
    
    // Campos estáticos
    static contador = 0;
    
    constructor(nome) {
        this.nome = nome;
        this.#id = ++Animal.contador;
    }
    
    // Getter
    get identificador() {
        return this.#id;
    }
    
    // Método
    falar() {
        console.log(\`\${this.nome} faz um som\`);
    }
    
    // Método estático
    static criarAnonimo() {
        return new Animal("Anônimo");
    }
}

// Herança
class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);  // Chama construtor pai
        this.raca = raca;
    }
    
    // Override de método
    falar() {
        console.log(\`\${this.nome} late: Au au!\`);
    }
    
    // Método próprio
    buscar() {
        console.log(\`\${this.nome} está buscando\`);
    }
}

// Uso
const rex = new Cachorro("Rex", "Labrador");
rex.falar();  // Rex late: Au au!
rex.buscar();

// Mixins (composição)
const nadadorMixin = {
    nadar() {
        console.log(\`\${this.nome} está nadando\`);
    }
};

Object.assign(Cachorro.prototype, nadadorMixin);
rex.nadar();  // Rex está nadando

// instanceof
console.log(rex instanceof Cachorro);  // true
console.log(rex instanceof Animal);    // true
`,
    },
    {
      title: 'JavaScript: Proxies e Reflect',
      content: `
// Proxy básico
const pessoa = {
    nome: "João",
    idade: 30
};

const handler = {
    // Intercepta leitura de propriedade
    get(target, prop, receiver) {
        console.log(\`Lendo \${prop}\`);
        return Reflect.get(target, prop, receiver);
    },
    
    // Intercepta escrita
    set(target, prop, value, receiver) {
        console.log(\`Setando \${prop} = \${value}\`);
        return Reflect.set(target, prop, value, receiver);
    },
    
    // Intercepta 'prop in obj'
    has(target, prop) {
        console.log(\`Verificando existência de \${prop}\`);
        return Reflect.has(target, prop);
    },
    
    // Intercepta delete
    deleteProperty(target, prop) {
        console.log(\`Deletando \${prop}\`);
        return Reflect.deleteProperty(target, prop);
    }
};

const proxy = new Proxy(pessoa, handler);

// Validação com Proxy
function criarObjValidado(obj, validacoes) {
    return new Proxy(obj, {
        set(target, prop, value) {
            if (validacoes[prop]) {
                if (!validacoes[prop](value)) {
                    throw new Error(\`Valor inválido para \${prop}\`);
                }
            }
            target[prop] = value;
            return true;
        }
    });
}

const usuario = criarObjValidado({}, {
    idade: (v) => typeof v === 'number' && v > 0,
    email: (v) => v.includes('@')
});

// Proxy para propriedades negativas em array
function criarArrayNegativo(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop);
            if (index < 0) {
                prop = target.length + index;
            }
            return Reflect.get(target, prop);
        }
    });
}

const arr = criarArrayNegativo([1, 2, 3, 4, 5]);
console.log(arr[-1]);  // 5
`,
    },
    {
      title: 'Rust: Traits e Generics',
      content: `
// Trait - define comportamento compartilhado
trait Resumivel {
    fn resumir(&self) -> String;
    
    // Método com implementação padrão
    fn resumir_autor(&self) -> String {
        String::from("(Autor desconhecido)")
    }
}

struct Artigo {
    titulo: String,
    autor: String,
    conteudo: String,
}

impl Resumivel for Artigo {
    fn resumir(&self) -> String {
        format!("{}, por {}", self.titulo, self.autor)
    }
}

// Generics
fn maior<T: PartialOrd>(lista: &[T]) -> &T {
    let mut maior = &lista[0];
    for item in lista {
        if item > maior {
            maior = item;
        }
    }
    maior
}

// Múltiplos trait bounds
fn processar<T: Resumivel + Clone>(item: &T) -> String {
    item.resumir()
}

// Where clause
fn processar_complexo<T, U>(t: &T, u: &U) -> String
where
    T: Resumivel + Clone,
    U: std::fmt::Debug,
{
    format!("{} - {:?}", t.resumir(), u)
}

// Trait como parâmetro
fn notificar(item: &impl Resumivel) {
    println!("Notícia: {}", item.resumir());
}

// Trait objects (dispatch dinâmico)
fn criar_resumo(item: &dyn Resumivel) -> String {
    item.resumir()
}

// Implementando traits para tipos existentes
trait Dobrar {
    fn dobrar(&self) -> Self;
}

impl Dobrar for i32 {
    fn dobrar(&self) -> Self {
        self * 2
    }
}
`,
    },
    {
      title: 'Rust: Error Handling',
      content: `
use std::fs::File;
use std::io::{self, Read};

// Result para erros recuperáveis
fn ler_arquivo(caminho: &str) -> Result<String, io::Error> {
    let mut arquivo = File::open(caminho)?;  // ? propaga o erro
    let mut conteudo = String::new();
    arquivo.read_to_string(&mut conteudo)?;
    Ok(conteudo)
}

// Tratando Result
fn main() {
    match ler_arquivo("dados.txt") {
        Ok(conteudo) => println!("{}", conteudo),
        Err(erro) => eprintln!("Erro: {}", erro),
    }
    
    // Ou com unwrap_or
    let dados = ler_arquivo("dados.txt")
        .unwrap_or_else(|_| String::from("Conteúdo padrão"));
}

// Erros customizados
#[derive(Debug)]
enum MeuErro {
    Io(io::Error),
    Parse(std::num::ParseIntError),
    Personalizado(String),
}

impl std::fmt::Display for MeuErro {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            MeuErro::Io(e) => write!(f, "Erro de IO: {}", e),
            MeuErro::Parse(e) => write!(f, "Erro de parse: {}", e),
            MeuErro::Personalizado(msg) => write!(f, "{}", msg),
        }
    }
}

impl std::error::Error for MeuErro {}

// Convertendo erros
impl From<io::Error> for MeuErro {
    fn from(erro: io::Error) -> MeuErro {
        MeuErro::Io(erro)
    }
}

// Option para valores opcionais
fn dividir(a: i32, b: i32) -> Option<i32> {
    if b == 0 {
        None
    } else {
        Some(a / b)
    }
}

// Combinando Options
let resultado = dividir(10, 2)
    .map(|x| x * 2)
    .filter(|&x| x > 5)
    .unwrap_or(0);
`,
    },
    {
      title: 'Go: Structs e Interfaces',
      content: `
package main

import (
	"fmt"
	"math"
)

// Struct
type Retangulo struct {
	Largura  float64
	Altura   float64
}

// Método com receiver
func (r Retangulo) Area() float64 {
	return r.Largura * r.Altura
}

// Método com pointer receiver (pode modificar)
func (r *Retangulo) Escalar(fator float64) {
	r.Largura *= fator
	r.Altura *= fator
}

// Interface
type Forma interface {
	Area() float64
	Perimetro() float64
}

// Circulo implementa Forma
type Circulo struct {
	Raio float64
}

func (c Circulo) Area() float64 {
	return math.Pi * c.Raio * c.Raio
}

func (c Circulo) Perimetro() float64 {
	return 2 * math.Pi * c.Raio
}

// Função que aceita interface
func DescreverForma(f Forma) {
	fmt.Printf("Área: %.2f, Perímetro: %.2f\\n", f.Area(), f.Perimetro())
}

// Embedding (composição)
type Animal struct {
	Nome string
}

func (a Animal) Falar() {
	fmt.Println(a.Nome, "faz um som")
}

type Cachorro struct {
	Animal  // Embedding
	Raca string
}

func main() {
	c := Circulo{Raio: 5}
	DescreverForma(c)
	
	dog := Cachorro{
		Animal: Animal{Nome: "Rex"},
		Raca:   "Labrador",
	}
	dog.Falar()  // Método herdado
}
`,
    },
    {
      title: 'Go: Error Handling e Defer',
      content: `
package main

import (
	"errors"
	"fmt"
	"os"
)

// Função que retorna erro
func dividir(a, b float64) (float64, error) {
	if b == 0 {
		return 0, errors.New("divisão por zero")
	}
	return a / b, nil
}

// Erro customizado
type MeuErro struct {
	Mensagem string
	Codigo   int
}

func (e *MeuErro) Error() string {
	return fmt.Sprintf("Erro %d: %s", e.Codigo, e.Mensagem)
}

// Defer - executa ao sair da função
func lerArquivo(nome string) error {
	arquivo, err := os.Open(nome)
	if err != nil {
		return err
	}
	defer arquivo.Close()  // Garante fechamento
	
	// Processar arquivo...
	return nil
}

// Múltiplos defers (LIFO - último a entrar, primeiro a sair)
func exemplo() {
	defer fmt.Println("Terceiro")
	defer fmt.Println("Segundo")
	defer fmt.Println("Primeiro")
	// Imprime: Primeiro, Segundo, Terceiro
}

// Panic e Recover
func funcaoPerigosa() {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Recuperado de:", r)
		}
	}()
	
	panic("algo terrível aconteceu")
}

// Wrapping errors (Go 1.13+)
func processar() error {
	err := lerArquivo("dados.txt")
	if err != nil {
		return fmt.Errorf("falha ao processar: %w", err)
	}
	return nil
}

func main() {
	resultado, err := dividir(10, 0)
	if err != nil {
		fmt.Println("Erro:", err)
		return
	}
	fmt.Println("Resultado:", resultado)
	
	// Verificar tipo de erro
	if errors.Is(err, os.ErrNotExist) {
		fmt.Println("Arquivo não existe")
	}
}
`,
    },
    {
      title: 'Java: Streams e Lambda',
      content: `
import java.util.*;
import java.util.stream.*;

public class StreamsDemo {
    public static void main(String[] args) {
        List<String> nomes = Arrays.asList("Ana", "Bruno", "Carlos", "Diana");
        
        // Lambda básico
        nomes.forEach(nome -> System.out.println(nome));
        
        // Method reference
        nomes.forEach(System.out::println);
        
        // Filter
        List<String> filtrados = nomes.stream()
            .filter(n -> n.startsWith("A"))
            .collect(Collectors.toList());
        
        // Map
        List<Integer> tamanhos = nomes.stream()
            .map(String::length)
            .collect(Collectors.toList());
        
        // Reduce
        int somaCaracteres = nomes.stream()
            .mapToInt(String::length)
            .sum();
        
        // Sorted
        List<String> ordenados = nomes.stream()
            .sorted()
            .collect(Collectors.toList());
        
        // Find
        Optional<String> primeiro = nomes.stream()
            .filter(n -> n.length() > 4)
            .findFirst();
        
        // AllMatch, AnyMatch, NoneMatch
        boolean todosComA = nomes.stream()
            .allMatch(n -> n.contains("a"));
        
        // Collectors
        Map<Integer, List<String>> porTamanho = nomes.stream()
            .collect(Collectors.groupingBy(String::length));
        
        String concatenado = nomes.stream()
            .collect(Collectors.joining(", "));
        
        // IntStream, LongStream, DoubleStream
        int soma = IntStream.range(1, 10).sum();
        
        // Parallel streams
        long count = nomes.parallelStream()
            .filter(n -> n.length() > 3)
            .count();
    }
}
`,
    },
    {
      title: 'Java: Generics',
      content: `
import java.util.*;

// Classe genérica
public class Caixa<T> {
    private T conteudo;
    
    public void guardar(T item) {
        this.conteudo = item;
    }
    
    public T obter() {
        return conteudo;
    }
}

// Múltiplos parâmetros de tipo
class Par<K, V> {
    private K chave;
    private V valor;
    
    public Par(K chave, V valor) {
        this.chave = chave;
        this.valor = valor;
    }
}

// Bounded type parameters
class Calculadora {
    // T deve ser Number ou subclasse
    public static <T extends Number> double somar(T a, T b) {
        return a.doubleValue() + b.doubleValue();
    }
    
    // Múltiplos bounds
    public static <T extends Comparable<T> & Cloneable> T maior(T a, T b) {
        return a.compareTo(b) > 0 ? a : b;
    }
}

// Wildcards
class ProcessadorLista {
    // Upper bound: aceita List<Number> ou List<subclasse de Number>
    public static double soma(List<? extends Number> lista) {
        return lista.stream()
            .mapToDouble(Number::doubleValue)
            .sum();
    }
    
    // Lower bound: aceita List<Integer> ou List<superclasse de Integer>
    public static void adicionar(List<? super Integer> lista, int valor) {
        lista.add(valor);
    }
    
    // Unbounded: aceita qualquer List
    public static void imprimir(List<?> lista) {
        for (Object item : lista) {
            System.out.println(item);
        }
    }
}

// Método genérico
public static <T> List<T> arrayParaLista(T[] array) {
    return Arrays.asList(array);
}
`,
    },
    {
      title: 'Java: Optional',
      content: `
import java.util.Optional;

public class OptionalDemo {
    public static void main(String[] args) {
        // Criando Optional
        Optional<String> presente = Optional.of("Valor");
        Optional<String> vazio = Optional.empty();
        Optional<String> nullable = Optional.ofNullable(null);
        
        // Verificando presença
        if (presente.isPresent()) {
            System.out.println(presente.get());
        }
        
        // ifPresent com lambda
        presente.ifPresent(v -> System.out.println(v));
        
        // ifPresentOrElse (Java 9+)
        presente.ifPresentOrElse(
            v -> System.out.println("Valor: " + v),
            () -> System.out.println("Vazio")
        );
        
        // Valor padrão
        String valor = vazio.orElse("Padrão");
        String valorLazy = vazio.orElseGet(() -> "Calculado");
        
        // Lançar exceção se vazio
        // String obrigatorio = vazio.orElseThrow(() -> 
        //     new IllegalStateException("Valor obrigatório"));
        
        // Map
        Optional<Integer> tamanho = presente.map(String::length);
        
        // FlatMap (para evitar Optional<Optional<>>)
        Optional<String> resultado = presente
            .flatMap(v -> Optional.of(v.toUpperCase()));
        
        // Filter
        Optional<String> filtrado = presente
            .filter(v -> v.length() > 3);
        
        // or (Java 9+)
        Optional<String> comFallback = vazio
            .or(() -> Optional.of("Fallback"));
        
        // stream (Java 9+)
        presente.stream().forEach(System.out::println);
    }
    
    // Uso em métodos
    public Optional<Usuario> buscarPorId(int id) {
        Usuario usuario = // buscar no banco...
        return Optional.ofNullable(usuario);
    }
}
`,
    },
    {
      title: 'Ruby: Metaprogramação',
      content: `
# method_missing - intercepta chamadas a métodos inexistentes
class DynamicFinder
  def method_missing(method_name, *args)
    if method_name.to_s.start_with?('find_by_')
      atributo = method_name.to_s.sub('find_by_', '')
      puts "Buscando por #{atributo}: #{args.first}"
    else
      super
    end
  end
  
  def respond_to_missing?(method_name, include_private = false)
    method_name.to_s.start_with?('find_by_') || super
  end
end

finder = DynamicFinder.new
finder.find_by_nome("João")

# define_method - cria métodos dinamicamente
class Pessoa
  ATRIBUTOS = [:nome, :idade, :email]
  
  ATRIBUTOS.each do |attr|
    define_method(attr) do
      instance_variable_get("@#{attr}")
    end
    
    define_method("#{attr}=") do |valor|
      instance_variable_set("@#{attr}", valor)
    end
  end
end

# class_eval e instance_eval
String.class_eval do
  def gritar
    self.upcase + "!"
  end
end

"olá".gritar  # => "OLÁ!"

# send - chama método pelo nome
obj = "Hello"
obj.send(:upcase)  # => "HELLO"
obj.send(:[], 0)   # => "H"

# Hooks
class Base
  def self.inherited(subclass)
    puts "#{subclass} herdou de #{self}"
  end
  
  def self.method_added(method_name)
    puts "Método #{method_name} adicionado"
  end
end

# Módulos e extend/include
module Saudavel
  def self.included(base)
    base.extend(ClassMethods)
  end
  
  module ClassMethods
    def criar_saudacao(nome)
      define_method(:saudar) { "Olá, #{nome}!" }
    end
  end
end
`,
    },
    {
      title: 'Ruby: Blocks, Procs e Lambdas',
      content: `
# Block - código passado para método
[1, 2, 3].each { |n| puts n }

[1, 2, 3].each do |n|
  puts n * 2
end

# Método que aceita block
def executar_duas_vezes
  yield
  yield
end

executar_duas_vezes { puts "Olá!" }

# Block com parâmetros
def aplicar_a_lista(lista)
  lista.map { |item| yield(item) }
end

resultado = aplicar_a_lista([1, 2, 3]) { |n| n * 2 }

# Proc - block como objeto
meu_proc = Proc.new { |n| n * 2 }
dobrar = proc { |n| n * 2 }

meu_proc.call(5)  # => 10
meu_proc[5]       # => 10
meu_proc.(5)      # => 10

# Lambda
meu_lambda = lambda { |n| n * 2 }
outro_lambda = ->(n) { n * 2 }

meu_lambda.call(5)  # => 10

# Diferenças entre Proc e Lambda
# 1. Lambda verifica argumentos, Proc não
proc_flex = proc { |a, b| "a=#{a}, b=#{b}" }
lambda_strict = ->(a, b) { "a=#{a}, b=#{b}" }

proc_flex.call(1)           # => "a=1, b="
# lambda_strict.call(1)     # ArgumentError

# 2. Return em Proc sai do método, em Lambda só do lambda
def teste_proc
  meu_proc = Proc.new { return "do proc" }
  meu_proc.call
  "do método"  # Nunca executa
end

def teste_lambda
  meu_lambda = -> { return "do lambda" }
  meu_lambda.call
  "do método"  # Executa normalmente
end

# Converter método em Proc
def dobrar(n)
  n * 2
end

[1, 2, 3].map(&method(:dobrar))

# Symbol#to_proc
["a", "b", "c"].map(&:upcase)  # => ["A", "B", "C"]
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
    {
      title: 'Express.js: Configuração Básica e Rotas',
      content: `
// Instalação: npm install express

const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rota GET simples
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Rota com parâmetros
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ id: userId, name: 'João' });
});

// Rota POST
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ message: 'User created', name, email });
});

// Rota PUT e DELETE
app.put('/users/:id', (req, res) => res.json({ updated: true }));
app.delete('/users/:id', (req, res) => res.status(204).send());

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'));
`,
    },
    {
      title: 'Express.js: Middlewares',
      content: `
const express = require('express');
const app = express();

// Middleware de logging
const logger = (req, res, next) => {
    console.log(new Date().toISOString(), req.method, req.url);
    next();
};

// Middleware de autenticação
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }
    next();
};

// Middleware global
app.use(logger);
app.use(express.json());

// Middleware específico para rotas
app.get('/public', (req, res) => res.json({ message: 'Rota pública' }));
app.get('/private', authenticate, (req, res) => res.json({ message: 'Rota privada' }));

// Middleware de erro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

// Middleware 404
app.use((req, res) => res.status(404).json({ error: 'Rota não encontrada' }));
`,
    },
    {
      title: 'Express.js: Router e Organização',
      content: `
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
});

module.exports = router;

// app.js
const express = require('express');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

module.exports = app;
`,
    },
    {
      title: 'Express.js: Validação com Express-Validator',
      content: `
// npm install express-validator
const { body, validationResult, param } = require('express-validator');
const express = require('express');
const app = express();
app.use(express.json());

// Regras de validação
const userValidation = [
    body('email').isEmail().normalizeEmail().withMessage('Email inválido'),
    body('password').isLength({ min: 6 }).withMessage('Senha curta'),
    body('name').trim().notEmpty().withMessage('Nome obrigatório')
];

// Middleware para verificar erros
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Rota com validação
app.post('/users', userValidation, validate, (req, res) => {
    res.status(201).json({ message: 'User created' });
});

// Validação de parâmetros
app.get('/users/:id', 
    param('id').isInt().withMessage('ID deve ser número'),
    validate,
    (req, res) => res.json({ id: req.params.id })
);
`,
    },
    {
      title: 'Express.js: Upload de Arquivos',
      content: `
// npm install multer
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configuração do storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueName + path.extname(file.originalname));
    }
});

// Filtro de arquivos
const fileFilter = (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/gif'];
    cb(null, allowed.includes(file.mimetype));
};

const upload = multer({ 
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// Upload único
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ message: 'Upload realizado', filename: req.file.filename });
});

// Upload múltiplo
app.post('/uploads', upload.array('images', 5), (req, res) => {
    res.json({ files: req.files.map(f => f.filename) });
});
`,
    },
    {
      title: 'FastAPI: Introdução e Rotas',
      content: `
# pip install fastapi uvicorn
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List

app = FastAPI(title="Minha API", version="1.0.0")

class User(BaseModel):
    name: str
    email: str
    age: Optional[int] = None

class UserResponse(User):
    id: int

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/users/{user_id}", response_model=UserResponse)
async def get_user(user_id: int):
    return {"id": user_id, "name": "João", "email": "joao@email.com"}

@app.get("/users/", response_model=List[UserResponse])
async def list_users(skip: int = 0, limit: int = 10):
    return []

@app.post("/users/", response_model=UserResponse, status_code=201)
async def create_user(user: User):
    return {"id": 1, **user.dict()}

# Executar: uvicorn main:app --reload
`,
    },
    {
      title: 'FastAPI: Dependências e Autenticação',
      content: `
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import Optional

app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class User(BaseModel):
    username: str
    email: Optional[str] = None
    disabled: Optional[bool] = None

async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = decode_token(token)  # Implementar
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user

async def get_current_active_user(user: User = Depends(get_current_user)):
    if user.disabled:
        raise HTTPException(status_code=400, detail="Usuário inativo")
    return user

@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    access_token = create_access_token(data={"sub": form_data.username})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/users/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user
`,
    },
    {
      title: 'FastAPI: Background Tasks e WebSockets',
      content: `
from fastapi import FastAPI, BackgroundTasks, WebSocket, WebSocketDisconnect
from typing import List

app = FastAPI()

def send_email(email: str, message: str):
    import time
    time.sleep(5)
    print(f"Email enviado para {email}: {message}")

@app.post("/send-notification/")
async def send_notification(email: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(send_email, email, "Bem-vindo!")
    return {"message": "Notificação será enviada em background"}

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def broadcast(self, message: str):
        for conn in self.active_connections:
            await conn.send_text(message)

manager = ConnectionManager()

@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: str):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await manager.broadcast(f"Cliente {client_id}: {data}")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
`,
    },
    {
      title: 'Django REST Framework: Serializers',
      content: `
# serializers.py
from rest_framework import serializers
from .models import User, Post

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'date_joined']
        read_only_fields = ['date_joined']

class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'created_at']
    
    def validate_title(self, value):
        if len(value) < 5:
            raise serializers.ValidationError("Título muito curto")
        return value

class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'content']
    
    def create(self, validated_data):
        validated_data['author'] = self.context['request'].user
        return super().create(validated_data)

class UserDetailSerializer(serializers.ModelSerializer):
    posts_count = serializers.SerializerMethodField()
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'posts_count']
    
    def get_posts_count(self, obj):
        return obj.posts.count()
`,
    },
    {
      title: 'Django REST Framework: ViewSets e Routers',
      content: `
# views.py
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import User, Post
from .serializers import UserSerializer, PostSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    @action(detail=True, methods=['get'])
    def posts(self, request, pk=None):
        user = self.get_object()
        posts = user.posts.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        author = self.request.query_params.get('author')
        if author:
            queryset = queryset.filter(author__username=author)
        return queryset

# urls.py
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)
urlpatterns = router.urls
`,
    },
    {
      title: 'Django REST Framework: Filtros e Paginação',
      content: `
# settings.py
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ],
}

# filters.py
import django_filters
from .models import Post

class PostFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(lookup_expr='icontains')
    created_after = django_filters.DateTimeFilter(field_name='created_at', lookup_expr='gte')
    created_before = django_filters.DateTimeFilter(field_name='created_at', lookup_expr='lte')
    
    class Meta:
        model = Post
        fields = ['author', 'title', 'created_after', 'created_before']

# views.py
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filterset_class = PostFilter
    search_fields = ['title', 'content']
    ordering_fields = ['created_at', 'title']
    ordering = ['-created_at']

# Uso: GET /posts/?author=1&title=django&ordering=-created_at
`,
    },
    {
      title: 'Flask: SQLAlchemy ORM',
      content: `
# pip install flask-sqlalchemy
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    posts = db.relationship('Post', backref='author', lazy=True)
    
    def to_dict(self):
        return {'id': self.id, 'username': self.username, 'email': self.email}

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

with app.app_context():
    db.create_all()

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return {'users': [u.to_dict() for u in users]}

@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    user = User(username=data['username'], email=data['email'])
    db.session.add(user)
    db.session.commit()
    return user.to_dict(), 201
`,
    },
    {
      title: 'Flask: Blueprints e Estrutura',
      content: `
# Estrutura: app/__init__.py, app/routes/users.py

# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app(config_name='development'):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    db.init_app(app)
    
    from app.routes.users import users_bp
    from app.routes.posts import posts_bp
    
    app.register_blueprint(users_bp, url_prefix='/api/users')
    app.register_blueprint(posts_bp, url_prefix='/api/posts')
    
    return app

# app/routes/users.py
from flask import Blueprint, request, jsonify
from app.models import User
from app import db

users_bp = Blueprint('users', __name__)

@users_bp.route('/', methods=['GET'])
def list_users():
    users = User.query.all()
    return jsonify([u.to_dict() for u in users])

@users_bp.route('/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get_or_404(id)
    return jsonify(user.to_dict())

@users_bp.route('/', methods=['POST'])
def create_user():
    data = request.json
    user = User(**data)
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201
`,
    },
    {
      title: 'ASP.NET Core: Web API Básica',
      content: `
// Program.cs (.NET 6+)
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();

// Controllers/UsersController.cs
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private static List<User> _users = new();

    [HttpGet]
    public ActionResult<IEnumerable<User>> GetAll() => Ok(_users);

    [HttpGet("{id}")]
    public ActionResult<User> GetById(int id)
    {
        var user = _users.FirstOrDefault(u => u.Id == id);
        if (user == null) return NotFound();
        return Ok(user);
    }

    [HttpPost]
    public ActionResult<User> Create(User user)
    {
        user.Id = _users.Count + 1;
        _users.Add(user);
        return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
    }
}
`,
    },
    {
      title: 'ASP.NET Core: Entity Framework',
      content: `
// Models/User.cs
public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public ICollection<Post> Posts { get; set; } = new List<Post>();
}

// Data/AppDbContext.cs
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<User> Users => Set<User>();
    public DbSet<Post> Posts => Set<Post>();
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .HasMany(u => u.Posts)
            .WithOne(p => p.Author)
            .HasForeignKey(p => p.AuthorId);
    }
}

// Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

// Controller com EF
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;
    public UsersController(AppDbContext context) => _context = context;

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetAll()
        => await _context.Users.Include(u => u.Posts).ToListAsync();
}
`,
    },
    {
      title: 'ASP.NET Core: Autenticação JWT',
      content: `
// Program.cs
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
        };
    });

// Services/TokenService.cs
public class TokenService
{
    private readonly IConfiguration _config;
    public TokenService(IConfiguration config) => _config = config;
    
    public string GenerateToken(User user)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Role, user.Role)
        };
        
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        
        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddHours(2),
            signingCredentials: creds);
        
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
`,
    },
    {
      title: 'Go Gin: API REST Básica',
      content: `
// go get -u github.com/gin-gonic/gin

package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

type User struct {
    ID    string
    Name  string
    Email string
}

var users = []User{}

func main() {
    r := gin.Default()
    
    api := r.Group("/api")
    {
        api.GET("/users", getUsers)
        api.GET("/users/:id", getUserById)
        api.POST("/users", createUser)
    }
    
    r.Run(":8080")
}

func getUsers(c *gin.Context) {
    c.JSON(http.StatusOK, users)
}

func getUserById(c *gin.Context) {
    id := c.Param("id")
    for _, user := range users {
        if user.ID == id {
            c.JSON(http.StatusOK, user)
            return
        }
    }
    c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
}

func createUser(c *gin.Context) {
    var user User
    if err := c.ShouldBindJSON(&user); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    users = append(users, user)
    c.JSON(http.StatusCreated, user)
}
`,
    },
    {
      title: 'Go Gin: Middlewares',
      content: `
package main

import (
    "log"
    "net/http"
    "time"
    "github.com/gin-gonic/gin"
)

func Logger() gin.HandlerFunc {
    return func(c *gin.Context) {
        start := time.Now()
        path := c.Request.URL.Path
        c.Next()
        latency := time.Since(start)
        status := c.Writer.Status()
        log.Printf("[%d] %s %s - %v", status, c.Request.Method, path, latency)
    }
}

func AuthRequired() gin.HandlerFunc {
    return func(c *gin.Context) {
        token := c.GetHeader("Authorization")
        if token == "" {
            c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Token não fornecido"})
            return
        }
        c.Next()
    }
}

func main() {
    r := gin.New()
    r.Use(Logger())
    r.Use(gin.Recovery())
    
    public := r.Group("/api")
    {
        public.GET("/health", func(c *gin.Context) {
            c.JSON(http.StatusOK, gin.H{"status": "ok"})
        })
    }
    
    private := r.Group("/api/admin")
    private.Use(AuthRequired())
    {
        private.GET("/users", getUsers)
    }
    
    r.Run(":8080")
}
`,
    },
    {
      title: 'Go Gin: GORM e Banco de Dados',
      content: `
// go get -u gorm.io/gorm gorm.io/driver/postgres

package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "gorm.io/gorm"
    "gorm.io/driver/postgres"
)

type User struct {
    gorm.Model
    Name  string
    Email string
    Posts []Post
}

type Post struct {
    gorm.Model
    Title   string
    Content string
    UserID  uint
}

var db *gorm.DB

func initDB() {
    dsn := "host=localhost user=postgres password=secret dbname=app port=5432"
    var err error
    db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        panic("Falha ao conectar ao banco")
    }
    db.AutoMigrate(&User{}, &Post{})
}

func main() {
    initDB()
    r := gin.Default()
    
    r.GET("/users", func(c *gin.Context) {
        var users []User
        db.Preload("Posts").Find(&users)
        c.JSON(http.StatusOK, users)
    })
    
    r.POST("/users", func(c *gin.Context) {
        var user User
        if err := c.ShouldBindJSON(&user); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }
        db.Create(&user)
        c.JSON(http.StatusCreated, user)
    })
    
    r.Run(":8080")
}
`,
    },
    {
      title: 'NestJS: Controllers e Services',
      content: `
// npm install @nestjs/core @nestjs/common

// users.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() { return this.usersService.findAll(); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.usersService.findOne(+id); }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.usersService.remove(+id); }
}

// users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  findAll() { return this.users; }
  findOne(id: number) {
    const user = this.users.find(u => u.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
  create(dto: CreateUserDto) {
    const user = { id: Date.now(), ...dto };
    this.users.push(user);
    return user;
  }
}
`,
    },
    {
      title: 'NestJS: Módulos e TypeORM',
      content: `
// users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret',
      database: 'app',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}

// entities/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Post, post => post.author)
  posts: Post[];
}
`,
    },
    {
      title: 'NestJS: Guards e Interceptors',
      content: `
// guards/jwt-auth.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    
    if (!token) return false;
    
    try {
      const payload = this.jwtService.verify(token);
      request.user = payload;
      return true;
    } catch { return false; }
  }
}

// dto/create-user.dto.ts
import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString() @MinLength(2)
  name: string;

  @IsEmail()
  email: string;
}

// interceptors/transform.interceptor.ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => ({ success: true, data, timestamp: new Date().toISOString() })),
    );
  }
}
`,
    },
    {
      title: 'JWT: Autenticação com Node.js',
      content: `
// npm install jsonwebtoken bcryptjs
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET || 'sua-chave-secreta';
const JWT_EXPIRES_IN = '2h';

function generateToken(user) {
    return jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );
}

function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }
    
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    
    if (!decoded) {
        return res.status(401).json({ error: 'Token inválido' });
    }
    
    req.user = decoded;
    next();
}

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    
    const token = generateToken(user);
    res.json({ token, user: { id: user.id, email: user.email } });
});
`,
    },
    {
      title: 'OAuth 2.0: Fluxo de Autenticação',
      content: `
// npm install passport passport-google-oauth20
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    let user = await User.findOne({ googleId: profile.id });
    
    if (!user) {
      user = await User.create({
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        avatar: profile.photos[0].value
      });
    }
    
    return done(null, user);
  }
));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const token = generateToken(req.user);
    res.redirect('/auth/success?token=' + token);
  }
);
`,
    },
    {
      title: 'Rate Limiting e Segurança',
      content: `
// npm install express-rate-limit helmet cors
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100,
    message: { error: 'Muitas requisições, tente novamente mais tarde' },
    standardHeaders: true,
    legacyHeaders: false,
});

const loginLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 5,
    message: { error: 'Muitas tentativas de login' }
});

const app = express();

app.use(helmet());

app.use(cors({
    origin: ['https://meusite.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(limiter);
app.use('/api/login', loginLimiter);

const sanitize = (req, res, next) => {
    for (let key in req.body) {
        if (typeof req.body[key] === 'string') {
            req.body[key] = req.body[key].replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
    }
    next();
};

app.use(sanitize);
`,
    },
    {
      title: 'REST API: Boas Práticas',
      content: `
// Estrutura de resposta padronizada
const successResponse = (res, data, message = 'Sucesso', statusCode = 200) => {
    return res.status(statusCode).json({
        success: true, message, data, timestamp: new Date().toISOString()
    });
};

const errorResponse = (res, message, statusCode = 400, errors = null) => {
    return res.status(statusCode).json({
        success: false, message, errors, timestamp: new Date().toISOString()
    });
};

// Versionamento de API
app.use('/api/v1/users', usersV1Router);
app.use('/api/v2/users', usersV2Router);

// Paginação
const paginate = async (model, page = 1, limit = 10, filter = {}) => {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
        model.find(filter).skip(skip).limit(limit),
        model.countDocuments(filter)
    ]);
    
    return {
        data,
        pagination: {
            page, limit, total,
            pages: Math.ceil(total / limit),
            hasNext: page * limit < total,
            hasPrev: page > 1
        }
    };
};

app.get('/api/users', async (req, res) => {
    const { page = 1, limit = 10, sort = '-createdAt', name } = req.query;
    const filter = {};
    if (name) filter.name = new RegExp(name, 'i');
    const result = await paginate(User, +page, +limit, filter);
    successResponse(res, result);
});
`,
    },
    {
      title: 'Prisma ORM: Configuração e Queries',
      content: `
// npm install prisma @prisma/client
// npx prisma init

// schema.prisma
generator client { provider = "prisma-client-js" }
datasource db { provider = "postgresql"; url = env("DATABASE_URL") }

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

// Uso
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar usuário com posts
const user = await prisma.user.create({
  data: {
    email: 'joao@email.com',
    name: 'João',
    posts: { create: [{ title: 'Post 1', content: '...' }] }
  },
  include: { posts: true }
});

// Buscar com filtros
const users = await prisma.user.findMany({
  where: { email: { contains: '@gmail.com' } },
  include: { posts: { where: { published: true } } },
  orderBy: { createdAt: 'desc' },
  skip: 0, take: 10
});
`,
    },
    {
      title: 'MongoDB com Mongoose',
      content: `
// npm install mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
};

const User = mongoose.model('User', userSchema);

const users = await User.find({ role: 'user' })
    .select('name email')
    .populate('posts', 'title')
    .sort('-createdAt')
    .limit(10);
`,
    },
    {
      title: 'Redis: Cache e Sessões',
      content: `
// npm install ioredis
const Redis = require('ioredis');
const redis = new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD
});

const cache = {
    async get(key) {
        const data = await redis.get(key);
        return data ? JSON.parse(data) : null;
    },
    async set(key, value, ttlSeconds = 3600) {
        await redis.setex(key, ttlSeconds, JSON.stringify(value));
    },
    async del(key) {
        await redis.del(key);
    },
    async invalidatePattern(pattern) {
        const keys = await redis.keys(pattern);
        if (keys.length > 0) await redis.del(...keys);
    }
};

const cacheMiddleware = (ttl = 300) => async (req, res, next) => {
    const key = 'cache:' + req.originalUrl;
    
    const cached = await cache.get(key);
    if (cached) return res.json(cached);
    
    const originalJson = res.json.bind(res);
    res.json = async (data) => {
        await cache.set(key, data, ttl);
        return originalJson(data);
    };
    
    next();
};

app.get('/api/products', cacheMiddleware(600), async (req, res) => {
    const products = await Product.find();
    res.json(products);
});
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
    },
    {
      title: 'Docker: Comandos Essenciais',
      content: `
# Listar imagens locais
docker images

# Listar containers em execução
docker ps

# Listar todos os containers (incluindo parados)
docker ps -a

# Baixar uma imagem do Docker Hub
docker pull nginx:latest

# Executar um container
docker run -d -p 8080:80 --name meu-nginx nginx

# Parar um container
docker stop meu-nginx

# Remover um container
docker rm meu-nginx

# Remover uma imagem
docker rmi nginx:latest

# Ver logs de um container
docker logs -f meu-nginx

# Executar comando dentro de um container
docker exec -it meu-nginx bash

# Limpar recursos não utilizados
docker system prune -a
`,
    },
    {
      title: 'Docker: Dockerfile',
      content: `
# Dockerfile para uma aplicação Node.js
FROM node:18-alpine

# Criar diretório da aplicação
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar código fonte
COPY . .

# Expor porta
EXPOSE 3000

# Usuário não-root para segurança
USER node

# Comando de inicialização
CMD ["node", "server.js"]

# Multi-stage build para otimização
# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY . .
# RUN npm ci && npm run build
#
# FROM node:18-alpine
# WORKDIR /app
# COPY --from=builder /app/dist ./dist
# CMD ["node", "dist/server.js"]
`,
    },
    {
      title: 'Docker Compose: Configuração Básica',
      content: `
# docker-compose.yml
version: '3.8'

services:
  # Aplicação web
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
    depends_on:
      - db
      - redis
    restart: unless-stopped

  # Banco de dados PostgreSQL
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  # Cache Redis
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:

# Comandos:
# docker-compose up -d        # Iniciar serviços
# docker-compose down         # Parar serviços
# docker-compose logs -f app  # Ver logs
`,
    },
    {
      title: 'Kubernetes: Conceitos Básicos',
      content: `
# Pod - Menor unidade deployável
apiVersion: v1
kind: Pod
metadata:
  name: meu-pod
  labels:
    app: minha-app
spec:
  containers:
  - name: app
    image: nginx:latest
    ports:
    - containerPort: 80

# Comandos kubectl essenciais:
# kubectl get pods              # Listar pods
# kubectl get services          # Listar serviços
# kubectl get deployments       # Listar deployments
# kubectl describe pod <nome>   # Detalhes do pod
# kubectl logs <pod>            # Ver logs
# kubectl exec -it <pod> -- sh  # Executar shell no pod
# kubectl apply -f arquivo.yaml # Aplicar configuração
# kubectl delete -f arquivo.yaml # Deletar recursos
# kubectl get nodes             # Listar nodes do cluster
# kubectl get namespaces        # Listar namespaces
`,
    },
    {
      title: 'Kubernetes: Deployment e Service',
      content: `
# Deployment - Gerencia réplicas e atualizações
apiVersion: apps/v1
kind: Deployment
metadata:
  name: minha-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: minha-app
  template:
    metadata:
      labels:
        app: minha-app
    spec:
      containers:
      - name: app
        image: minha-app:v1.0
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "128Mi"
            cpu: "250m"
          limits:
            memory: "256Mi"
            cpu: "500m"

---
# Service - Expõe o Deployment
apiVersion: v1
kind: Service
metadata:
  name: minha-app-service
spec:
  selector:
    app: minha-app
  ports:
  - port: 80
    targetPort: 8080
  type: LoadBalancer
`,
    },
    {
      title: 'Kubernetes: ConfigMap e Secret',
      content: `
# ConfigMap - Configurações não sensíveis
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_ENV: "production"
  LOG_LEVEL: "info"
  API_URL: "https://api.exemplo.com"

---
# Secret - Dados sensíveis (base64)
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  DB_PASSWORD: cGFzc3dvcmQxMjM=  # echo -n 'password123' | base64
  API_KEY: bWluaGEtY2hhdmUtc2VjcmV0YQ==

---
# Usando no Deployment
spec:
  containers:
  - name: app
    image: minha-app:v1
    envFrom:
    - configMapRef:
        name: app-config
    - secretRef:
        name: app-secrets
    # Ou variáveis específicas:
    env:
    - name: DATABASE_PASSWORD
      valueFrom:
        secretKeyRef:
          name: app-secrets
          key: DB_PASSWORD
`,
    },
    {
      title: 'Kubernetes: Ingress',
      content: `
# Ingress - Roteamento HTTP/HTTPS externo
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: minha-app-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  ingressClassName: nginx
  tls:
  - hosts:
    - meusite.com
    secretName: meusite-tls
  rules:
  - host: meusite.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-service
            port:
              number: 80
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: backend-service
            port:
              number: 8080

# Comandos úteis:
# kubectl get ingress
# kubectl describe ingress minha-app-ingress
`,
    },
    {
      title: 'Kubernetes: HPA e PersistentVolume',
      content: `
# HorizontalPodAutoscaler - Escalonamento automático
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: minha-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: minha-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70

---
# PersistentVolumeClaim - Armazenamento persistente
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: minha-app-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: standard

# Usando no Pod:
# volumes:
# - name: data
#   persistentVolumeClaim:
#     claimName: minha-app-pvc
`,
    },
    {
      title: 'Terraform: Fundamentos',
      content: `
# main.tf - Configuração principal

# Provedor (AWS como exemplo)
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# Variáveis
variable "aws_region" {
  default = "us-east-1"
}

variable "instance_type" {
  default = "t3.micro"
}

# Recurso EC2
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = var.instance_type

  tags = {
    Name = "WebServer"
    Environment = "production"
  }
}

# Output
output "instance_ip" {
  value = aws_instance.web.public_ip
}

# Comandos:
# terraform init    # Inicializar
# terraform plan    # Ver mudanças
# terraform apply   # Aplicar
# terraform destroy # Destruir recursos
`,
    },
    {
      title: 'Terraform: Módulos e Backend',
      content: `
# Backend remoto (S3)
terraform {
  backend "s3" {
    bucket         = "meu-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-locks"
  }
}

# Usando módulos
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"

  name = "minha-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = true

  tags = {
    Environment = "production"
  }
}

# Criando seu próprio módulo (modules/ec2/main.tf)
# resource "aws_instance" "this" {
#   ami           = var.ami
#   instance_type = var.instance_type
#   subnet_id     = var.subnet_id
# }
#
# Usando:
# module "webserver" {
#   source        = "./modules/ec2"
#   ami           = "ami-123456"
#   instance_type = "t3.small"
#   subnet_id     = module.vpc.public_subnets[0]
# }
`,
    },
    {
      title: 'Ansible: Playbook Básico',
      content: `
# playbook.yml
---
- name: Configurar servidor web
  hosts: webservers
  become: yes  # Executar como root

  vars:
    http_port: 80
    app_name: minha-app

  tasks:
    - name: Atualizar pacotes
      apt:
        update_cache: yes
        upgrade: dist

    - name: Instalar Nginx
      apt:
        name: nginx
        state: present

    - name: Copiar configuração do Nginx
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/sites-available/default
      notify: Reiniciar Nginx

    - name: Iniciar e habilitar Nginx
      service:
        name: nginx
        state: started
        enabled: yes

  handlers:
    - name: Reiniciar Nginx
      service:
        name: nginx
        state: restarted

# Inventário (inventory.ini)
# [webservers]
# server1 ansible_host=192.168.1.10
# server2 ansible_host=192.168.1.11
#
# Executar: ansible-playbook -i inventory.ini playbook.yml
`,
    },
    {
      title: 'Ansible: Roles e Variáveis',
      content: `
# Estrutura de Role
# roles/
#   webserver/
#     tasks/main.yml
#     handlers/main.yml
#     templates/
#     files/
#     vars/main.yml
#     defaults/main.yml

# roles/webserver/tasks/main.yml
---
- name: Instalar dependências
  apt:
    name: "{{ item }}"
    state: present
  loop:
    - nginx
    - python3
    - certbot

- name: Configurar virtual host
  template:
    src: vhost.conf.j2
    dest: "/etc/nginx/sites-available/{{ domain }}"
  notify: Reload Nginx

# roles/webserver/defaults/main.yml
---
domain: exemplo.com
document_root: /var/www/html

# Usando role no playbook
# - hosts: webservers
#   roles:
#     - role: webserver
#       vars:
#         domain: meusite.com

# group_vars/webservers.yml
---
nginx_worker_processes: auto
nginx_worker_connections: 1024

# Comandos úteis:
# ansible-galaxy init minha-role  # Criar estrutura de role
# ansible-vault encrypt vars.yml  # Criptografar variáveis
`,
    },
    {
      title: 'Linux: Comandos de Arquivos e Diretórios',
      content: `
# Navegação
pwd                   # Diretório atual
cd /path/to/dir       # Mudar diretório
cd ..                 # Diretório pai
cd ~                  # Home do usuário

# Listar arquivos
ls                    # Listar
ls -la                # Listar detalhado com ocultos
ls -lh                # Tamanho legível (KB, MB)

# Criar e remover
mkdir -p dir1/dir2    # Criar diretórios recursivamente
touch arquivo.txt     # Criar arquivo vazio
rm arquivo.txt        # Remover arquivo
rm -rf diretorio      # Remover diretório e conteúdo

# Copiar e mover
cp origem destino     # Copiar arquivo
cp -r dir1 dir2       # Copiar diretório
mv origem destino     # Mover/renomear

# Visualizar conteúdo
cat arquivo.txt       # Mostrar conteúdo
less arquivo.txt      # Paginado (q para sair)
head -n 20 arquivo    # Primeiras 20 linhas
tail -f arquivo.log   # Últimas linhas em tempo real

# Buscar arquivos
find /path -name "*.log"              # Por nome
find /path -type f -size +100M        # Arquivos > 100MB
find /path -mtime -7                  # Modificados nos últimos 7 dias
`,
    },
    {
      title: 'Linux: Permissões e Usuários',
      content: `
# Permissões (rwx = read, write, execute)
# Formato: [tipo][dono][grupo][outros]
# Exemplo: -rwxr-xr-- = arquivo, dono:rwx, grupo:rx, outros:r

chmod 755 arquivo     # rwxr-xr-x
chmod u+x arquivo     # Adicionar execução para dono
chmod -R 644 dir/     # Recursivo

# Mudar dono/grupo
chown usuario arquivo
chown usuario:grupo arquivo
chown -R usuario:grupo dir/

# Gerenciar usuários
useradd -m -s /bin/bash usuario   # Criar usuário
passwd usuario                     # Definir senha
userdel -r usuario                 # Remover usuário
usermod -aG grupo usuario          # Adicionar a grupo

# Gerenciar grupos
groupadd grupo
groupdel grupo
groups usuario        # Ver grupos do usuário

# Sudo
sudo comando          # Executar como root
sudo -u usuario cmd   # Executar como outro usuário
visudo                # Editar sudoers

# Arquivos importantes
# /etc/passwd   - Informações de usuários
# /etc/shadow   - Senhas criptografadas
# /etc/group    - Grupos
# /etc/sudoers  - Configuração sudo
`,
    },
    {
      title: 'Linux: Processos e Serviços',
      content: `
# Ver processos
ps aux                  # Todos os processos
ps aux | grep nginx     # Filtrar
top                     # Monitor interativo
htop                    # Monitor melhorado (se instalado)
pgrep nginx             # PID por nome

# Gerenciar processos
kill PID                # Enviar SIGTERM
kill -9 PID             # Forçar término (SIGKILL)
killall nome            # Matar por nome
pkill -f "padrao"       # Matar por padrão

# Processos em background
comando &               # Executar em background
nohup comando &         # Continua após logout
jobs                    # Ver jobs
fg %1                   # Trazer para foreground
bg %1                   # Enviar para background

# Systemd (serviços)
systemctl start nginx       # Iniciar
systemctl stop nginx        # Parar
systemctl restart nginx     # Reiniciar
systemctl status nginx      # Ver status
systemctl enable nginx      # Habilitar no boot
systemctl disable nginx     # Desabilitar no boot
systemctl list-units        # Listar serviços

# Journald (logs do systemd)
journalctl -u nginx         # Logs de um serviço
journalctl -f               # Seguir logs em tempo real
journalctl --since "1 hour ago"
`,
    },
    {
      title: 'Linux: Rede e Diagnóstico',
      content: `
# Informações de rede
ip addr                 # IPs das interfaces
ip route                # Tabela de roteamento
ifconfig                # IPs (comando antigo)
hostname -I             # IPs do host

# Diagnóstico
ping host               # Testar conectividade
traceroute host         # Rastrear rota
nslookup dominio        # Resolver DNS
dig dominio             # DNS detalhado
curl -I url             # Headers HTTP
wget url                # Download

# Portas e conexões
ss -tuln                # Portas abertas
netstat -tuln           # Portas (comando antigo)
lsof -i :80             # Processos na porta 80
nc -zv host 80          # Testar porta

# Firewall (UFW - Ubuntu)
ufw status              # Ver status
ufw enable              # Ativar
ufw allow 22/tcp        # Permitir SSH
ufw allow 80,443/tcp    # Permitir HTTP/HTTPS
ufw deny 3306           # Negar MySQL
ufw delete allow 80     # Remover regra

# Firewall (iptables)
iptables -L             # Listar regras
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables-save           # Salvar regras
`,
    },
    {
      title: 'Linux: Disco e Memória',
      content: `
# Uso de disco
df -h                   # Espaço em partições
du -sh /path            # Tamanho de diretório
du -sh * | sort -h      # Ordenar por tamanho
ncdu /path              # Navegador interativo

# Informações de memória
free -h                 # Memória RAM
vmstat 1 5              # Stats de VM (5 amostras)
cat /proc/meminfo       # Detalhes de memória

# Gerenciar discos
lsblk                   # Listar dispositivos
fdisk -l                # Listar partições
mount /dev/sdb1 /mnt    # Montar partição
umount /mnt             # Desmontar

# Formatar e criar filesystem
mkfs.ext4 /dev/sdb1     # Criar filesystem ext4
mkfs.xfs /dev/sdb1      # Criar filesystem xfs

# /etc/fstab - Montagem automática
# /dev/sdb1  /data  ext4  defaults  0  2

# LVM
pvcreate /dev/sdb       # Criar physical volume
vgcreate myvg /dev/sdb  # Criar volume group
lvcreate -L 10G -n mylv myvg  # Criar logical volume
lvextend -L +5G /dev/myvg/mylv  # Expandir

# SWAP
swapon -s               # Ver swap ativo
mkswap /dev/sdc1        # Criar swap
swapon /dev/sdc1        # Ativar swap
`,
    },
    {
      title: 'Shell Script: Fundamentos',
      content: `
#!/bin/bash
# Script básico - chmod +x script.sh para executar

# Variáveis
NOME="DevOps"
NUMERO=42
echo "Olá, $NOME! Número: $NUMERO"

# Entrada do usuário
read -p "Digite seu nome: " USER_NAME
echo "Bem-vindo, $USER_NAME"

# Condicionais
if [ "$NUMERO" -gt 40 ]; then
    echo "Maior que 40"
elif [ "$NUMERO" -eq 40 ]; then
    echo "Igual a 40"
else
    echo "Menor que 40"
fi

# Comparações: -eq (igual), -ne (diferente), -gt (maior), 
#              -lt (menor), -ge (maior ou igual), -le (menor ou igual)
# Strings: = (igual), != (diferente), -z (vazio), -n (não vazio)

# Loop for
for i in 1 2 3 4 5; do
    echo "Número: $i"
done

# Loop while
CONTADOR=0
while [ $CONTADOR -lt 5 ]; do
    echo "Contador: $CONTADOR"
    ((CONTADOR++))
done

# Funções
saudar() {
    echo "Olá, $1!"
}
saudar "Mundo"
`,
    },
    {
      title: 'Shell Script: Avançado',
      content: `
#!/bin/bash
set -euo pipefail  # Abortar em erros, variáveis não definidas

# Argumentos
echo "Script: $0"
echo "Primeiro arg: $1"
echo "Todos args: $@"
echo "Número de args: $#"

# Arrays
FRUTAS=("maçã" "banana" "laranja")
echo "Primeira: \${FRUTAS[0]}"
echo "Todas: \${FRUTAS[@]}"
echo "Quantidade: \${#FRUTAS[@]}"

# Substituição de comandos
DATA=$(date +%Y-%m-%d)
ARQUIVOS=$(ls -la)

# Redirecionamento
comando > saida.txt      # Sobrescrever
comando >> saida.txt     # Anexar
comando 2>&1             # stderr para stdout
comando &> all.log       # stdout e stderr

# Here document
cat << EOF > config.txt
Host: $HOSTNAME
Data: $DATA
EOF

# Verificar arquivos
[ -f arquivo ] && echo "É arquivo"
[ -d diretorio ] && echo "É diretório"
[ -e caminho ] && echo "Existe"
[ -r arquivo ] && echo "Legível"
[ -w arquivo ] && echo "Gravável"
[ -x arquivo ] && echo "Executável"

# Tratar erros
cleanup() {
    echo "Limpando recursos..."
}
trap cleanup EXIT ERR

# Case
case "$1" in
    start) echo "Iniciando..." ;;
    stop)  echo "Parando..." ;;
    *)     echo "Uso: $0 {start|stop}" ;;
esac
`,
    },
    {
      title: 'Nginx: Configuração Básica',
      content: `
# /etc/nginx/nginx.conf

user www-data;
worker_processes auto;
pid /run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logs
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # Otimizações
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;

    # Incluir configurações dos sites
    include /etc/nginx/sites-enabled/*;
}

# Comandos:
# nginx -t                    # Testar configuração
# systemctl reload nginx      # Recarregar
# systemctl restart nginx     # Reiniciar
`,
    },
    {
      title: 'Nginx: Virtual Hosts e Proxy Reverso',
      content: `
# /etc/nginx/sites-available/meusite.conf

# Servidor HTTP (redireciona para HTTPS)
server {
    listen 80;
    server_name meusite.com www.meusite.com;
    return 301 https://$server_name$request_uri;
}

# Servidor HTTPS
server {
    listen 443 ssl http2;
    server_name meusite.com www.meusite.com;

    # SSL
    ssl_certificate /etc/letsencrypt/live/meusite.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/meusite.com/privkey.pem;

    # Segurança SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;

    # Root e index
    root /var/www/meusite;
    index index.html;

    # Proxy reverso para API
    location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Arquivos estáticos
    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
`,
    },
    {
      title: 'Nginx: Load Balancer',
      content: `
# /etc/nginx/nginx.conf ou sites-available/

http {
    # Upstream - grupo de servidores
    upstream backend {
        # Algoritmos: round-robin (padrão), least_conn, ip_hash
        least_conn;
        
        server 10.0.0.1:3000 weight=5;
        server 10.0.0.2:3000 weight=3;
        server 10.0.0.3:3000 backup;  # Só usa se outros falharem
        
        # Health checks
        keepalive 32;
    }

    upstream websocket {
        ip_hash;  # Mantém sessão no mesmo servidor
        server 10.0.0.1:8080;
        server 10.0.0.2:8080;
    }

    server {
        listen 80;
        server_name api.exemplo.com;

        location / {
            proxy_pass http://backend;
            proxy_http_version 1.1;
            proxy_set_header Connection "";
            
            # Timeout e retry
            proxy_connect_timeout 5s;
            proxy_read_timeout 60s;
            proxy_next_upstream error timeout http_500;
        }

        location /ws {
            proxy_pass http://websocket;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }
}
`,
    },
    {
      title: 'Jenkins: Pipeline Declarativo',
      content: `
// Jenkinsfile
pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'minha-app'
        REGISTRY = 'registry.exemplo.com'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    junit 'reports/*.xml'
                }
            }
        }
        
        stage('Docker Build') {
            steps {
                script {
                    docker.build("\${REGISTRY}/\${DOCKER_IMAGE}:\${BUILD_NUMBER}")
                }
            }
        }
        
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
    
    post {
        success {
            slackSend channel: '#deploys', message: "Build #\${BUILD_NUMBER} succeeded"
        }
        failure {
            slackSend channel: '#deploys', message: "Build #\${BUILD_NUMBER} failed"
        }
    }
}
`,
    },
    {
      title: 'GitHub Actions: Deploy para AWS',
      content: `
# .github/workflows/deploy.yml
name: Deploy to AWS

on:
  push:
    branches: [main]

env:
  AWS_REGION: us-east-1
  ECR_REPOSITORY: minha-app
  ECS_CLUSTER: meu-cluster
  ECS_SERVICE: minha-app-service

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: \${{ env.AWS_REGION }}

    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v2

    - name: Build and push Docker image
      env:
        ECR_REGISTRY: \${{ steps.login-ecr.outputs.registry }}
        IMAGE_TAG: \${{ github.sha }}
      run: |
        docker build -t \$ECR_REGISTRY/\$ECR_REPOSITORY:\$IMAGE_TAG .
        docker push \$ECR_REGISTRY/\$ECR_REPOSITORY:\$IMAGE_TAG

    - name: Deploy to ECS
      run: |
        aws ecs update-service \\
          --cluster \$ECS_CLUSTER \\
          --service \$ECS_SERVICE \\
          --force-new-deployment
`,
    },
    {
      title: 'GitHub Actions: CI/CD Completo',
      content: `
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linter
      run: npm run lint
    
    - name: Run tests
      run: npm test
      env:
        DATABASE_URL: postgres://postgres:postgres@localhost:5432/test

    - name: Upload coverage
      uses: codecov/codecov-action@v3

  build:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Build Docker image
      run: docker build -t minha-app:\${{ github.sha }} .
    
    - name: Push to registry
      run: |
        echo \${{ secrets.DOCKER_PASSWORD }} | docker login -u \${{ secrets.DOCKER_USERNAME }} --password-stdin
        docker push minha-app:\${{ github.sha }}
`,
    },
    {
      title: 'Prometheus: Configuração Básica',
      content: `
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093

rule_files:
  - "alerts/*.yml"

scrape_configs:
  # Prometheus próprio
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  # Node Exporter (métricas do sistema)
  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']

  # Aplicações
  - job_name: 'app'
    metrics_path: '/metrics'
    static_configs:
      - targets: ['app:8080']

  # Kubernetes Service Discovery
  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true

# Iniciar com Docker:
# docker run -d -p 9090:9090 \\
#   -v /path/prometheus.yml:/etc/prometheus/prometheus.yml \\
#   prom/prometheus
`,
    },
    {
      title: 'Grafana: Dashboard JSON',
      content: `
// Exemplo de painel para Grafana
// Importar em: + > Import > Paste JSON
{
  "title": "Application Metrics",
  "panels": [
    {
      "title": "Request Rate",
      "type": "graph",
      "targets": [
        {
          "expr": "rate(http_requests_total[5m])",
          "legendFormat": "{{method}} {{path}}"
        }
      ]
    },
    {
      "title": "Error Rate",
      "type": "stat",
      "targets": [
        {
          "expr": "sum(rate(http_requests_total{status=~\"5..\"}[5m])) / sum(rate(http_requests_total[5m])) * 100"
        }
      ]
    },
    {
      "title": "Response Time P99",
      "type": "gauge",
      "targets": [
        {
          "expr": "histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))"
        }
      ]
    }
  ]
}

// PromQL úteis:
// rate(metric[5m])           - Taxa por segundo
// increase(metric[1h])       - Aumento no período
// sum by (label) (metric)    - Agrupar
// histogram_quantile(0.95, rate(histogram_bucket[5m]))  - Percentil
`,
    },
    {
      title: 'ELK Stack: Logstash Pipeline',
      content: `
# /etc/logstash/conf.d/pipeline.conf

input {
  # Receber logs via Beats
  beats {
    port => 5044
  }
  
  # Ou via arquivo
  file {
    path => "/var/log/app/*.log"
    start_position => "beginning"
    codec => json
  }
}

filter {
  # Parse de logs JSON
  if [message] =~ /^{/ {
    json {
      source => "message"
    }
  }
  
  # Parse de logs Apache/Nginx
  if [type] == "nginx" {
    grok {
      match => { "message" => "%{COMBINEDAPACHELOG}" }
    }
  }
  
  # Adicionar geolocalização
  if [clientip] {
    geoip {
      source => "clientip"
    }
  }
  
  # Parse de timestamp
  date {
    match => [ "timestamp", "ISO8601", "yyyy-MM-dd HH:mm:ss" ]
    target => "@timestamp"
  }
  
  # Remover campos desnecessários
  mutate {
    remove_field => ["host", "agent"]
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{+YYYY.MM.dd}"
  }
}
`,
    },
    {
      title: 'AWS CLI: Comandos Essenciais',
      content: `
# Configuração
aws configure                    # Configurar credenciais
aws configure --profile prod     # Perfil específico
export AWS_PROFILE=prod          # Usar perfil

# EC2
aws ec2 describe-instances
aws ec2 start-instances --instance-ids i-1234567890
aws ec2 stop-instances --instance-ids i-1234567890
aws ec2 run-instances \\
  --image-id ami-12345678 \\
  --instance-type t3.micro \\
  --key-name minha-chave

# S3
aws s3 ls                        # Listar buckets
aws s3 ls s3://meu-bucket/       # Listar conteúdo
aws s3 cp arquivo.txt s3://meu-bucket/
aws s3 sync ./pasta s3://meu-bucket/pasta
aws s3 rm s3://meu-bucket/arquivo.txt

# ECS
aws ecs list-clusters
aws ecs list-services --cluster meu-cluster
aws ecs update-service --cluster meu-cluster --service meu-servico --force-new-deployment

# Lambda
aws lambda list-functions
aws lambda invoke --function-name minha-funcao output.txt

# CloudWatch
aws logs describe-log-groups
aws logs tail /aws/lambda/minha-funcao --follow

# Secrets Manager
aws secretsmanager get-secret-value --secret-id meu-segredo
`,
    },
    {
      title: "SSL/TLS: Certbot e Let's Encrypt",
      content: `
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obter certificado para Nginx
sudo certbot --nginx -d meusite.com -d www.meusite.com

# Obter certificado standalone
sudo certbot certonly --standalone -d meusite.com

# Obter certificado com DNS challenge (wildcard)
sudo certbot certonly --manual --preferred-challenges dns -d "*.meusite.com"

# Renovar certificados
sudo certbot renew                    # Renovar todos
sudo certbot renew --dry-run          # Testar renovação

# Configurar renovação automática (cron)
# 0 0,12 * * * certbot renew --quiet

# Verificar certificados
sudo certbot certificates

# Revogar certificado
sudo certbot revoke --cert-path /etc/letsencrypt/live/meusite.com/cert.pem

# Arquivos de certificado
# /etc/letsencrypt/live/meusite.com/
#   fullchain.pem   - Certificado + intermediários
#   privkey.pem     - Chave privada
#   cert.pem        - Certificado apenas
#   chain.pem       - Intermediários

# Verificar SSL com OpenSSL
openssl s_client -connect meusite.com:443
openssl x509 -in cert.pem -text -noout
`,
    },
    {
      title: 'SSH: Configuração e Túneis',
      content: `
# Gerar chave SSH
ssh-keygen -t ed25519 -C "email@exemplo.com"
ssh-keygen -t rsa -b 4096 -C "email@exemplo.com"

# Copiar chave pública para servidor
ssh-copy-id usuario@servidor

# Conectar
ssh usuario@servidor
ssh -p 2222 usuario@servidor        # Porta diferente
ssh -i ~/.ssh/chave_privada usuario@servidor

# ~/.ssh/config - Simplificar conexões
Host meuserver
    HostName 192.168.1.100
    User admin
    Port 22
    IdentityFile ~/.ssh/minha_chave
    
Host producao
    HostName prod.exemplo.com
    User deploy
    ProxyJump bastion

# Uso: ssh meuserver

# Túnel SSH (port forwarding)
# Local: acesso local -> servidor remoto
ssh -L 8080:localhost:80 usuario@servidor
# Acessar localhost:8080 redireciona para servidor:80

# Remoto: acesso externo -> máquina local
ssh -R 9000:localhost:3000 usuario@servidor
# Acessar servidor:9000 redireciona para local:3000

# Dinâmico (SOCKS proxy)
ssh -D 1080 usuario@servidor

# SCP - Copiar arquivos
scp arquivo.txt usuario@servidor:/destino/
scp -r pasta/ usuario@servidor:/destino/
scp usuario@servidor:/origem/arquivo.txt ./
`,
    },
    {
      title: 'Helm: Gerenciamento de Charts',
      content: `
# Helm - Gerenciador de pacotes para Kubernetes

# Adicionar repositório
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Buscar charts
helm search repo nginx
helm search hub wordpress

# Instalar chart
helm install meu-nginx bitnami/nginx
helm install meu-app ./meu-chart -f values.yaml

# Listar releases
helm list
helm list -A  # Todos namespaces

# Atualizar release
helm upgrade meu-nginx bitnami/nginx
helm upgrade meu-app ./meu-chart -f values-prod.yaml

# Rollback
helm rollback meu-nginx 1

# Desinstalar
helm uninstall meu-nginx

# Criar chart
helm create meu-chart

# Estrutura do chart:
# meu-chart/
#   Chart.yaml        # Metadados
#   values.yaml       # Valores padrão
#   templates/        # Templates Kubernetes
#     deployment.yaml
#     service.yaml
#     ingress.yaml
#   charts/           # Dependências

# Validar chart
helm lint ./meu-chart
helm template meu-app ./meu-chart  # Renderizar templates

# Empacotar
helm package ./meu-chart
`,
    },
    {
      title: 'ArgoCD: GitOps Deployment',
      content: `
# Instalar ArgoCD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Acessar UI
kubectl port-forward svc/argocd-server -n argocd 8080:443

# Obter senha inicial
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d

# Application YAML
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: minha-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/meu-org/meu-repo.git
    targetRevision: HEAD
    path: k8s/overlays/production
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
    - CreateNamespace=true

# CLI
argocd login localhost:8080
argocd app list
argocd app sync minha-app
argocd app get minha-app
argocd app history minha-app
argocd app rollback minha-app 1
`,
    },
    {
      title: 'Vault: Gerenciamento de Segredos',
      content: `
# HashiCorp Vault - Gerenciamento seguro de segredos

# Iniciar servidor dev
vault server -dev

# Configurar endereço
export VAULT_ADDR='http://127.0.0.1:8200'
export VAULT_TOKEN='root-token'

# Login
vault login token=meu-token

# Secrets KV (Key-Value)
vault kv put secret/minha-app/config \\
  db_password=senha123 \\
  api_key=chave-secreta

vault kv get secret/minha-app/config
vault kv get -field=db_password secret/minha-app/config

# Políticas
vault policy write app-policy - <<EOF
path "secret/data/minha-app/*" {
  capabilities = ["read"]
}
EOF

# Autenticação por token
vault token create -policy=app-policy

# Autenticação Kubernetes
vault auth enable kubernetes
vault write auth/kubernetes/config \\
  kubernetes_host="https://kubernetes.default.svc"

vault write auth/kubernetes/role/minha-app \\
  bound_service_account_names=minha-app \\
  bound_service_account_namespaces=default \\
  policies=app-policy \\
  ttl=1h

# Injetor de segredos (annotations no Pod)
# vault.hashicorp.com/agent-inject: "true"
# vault.hashicorp.com/agent-inject-secret-config: "secret/data/minha-app/config"
`,
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