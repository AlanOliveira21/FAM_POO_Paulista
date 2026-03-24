# Herança simples
class Veiculo:
    def __init__(self,marca):
        self.marca = marca

    def mover(self):
        return "Está se movendo"

class Carro(Veiculo):
    def mover(self):
        return "O carro está dirigindo na estrada"

class Bicicleta(Veiculo):
    def mover(self):
        return "A bicicleta está sendo pedalada"

# Uso
c = Carro("Honda")
b = Bicicleta("Caloi")
d = Veiculo("Coisa")

print(c.marca, "->", c.mover())
print(b.marca, "->", b.mover())
print(d.marca, "->", d.mover())

print(30*"-")

#-----------------------
# subclasse de varias classes base
class A:
    pass
class B:
    pass
class C:
    pass
class D(A,B,C):
    pass

print(30*"-")

#----------------------------
# Sobreposição de métodos
# Classe base (superclsse / classe)
class Animal:
  def __init__(self,nome):
    self.nome = nome

  def falar_som(self):
    return "Animal falando"

  def descrever(self):
    return f"Eu sou um animal chamado {self.nome}"

class Cachorro(Animal):
  def __init__(self,nome,raca):
    # Chamamos o __init__ da classe pai
    super().__init__(nome)
    self.raca = raca

  # Sobrescrita (override) do método fazer_som
  def falar_som(self):
    return "Au Au!"
  
print("Exemplos de sobrecrita:\n")

rex = Cachorro("Rex","Labrador")
print(rex.descrever()) # Usa a versão sobrecrita
print(rex.falar_som()) # Usa a versão sobrecrita
print()

bichinho = Animal("Bichinho")
print(bichinho.descrever()) # Usa a versão original
print(bichinho.falar_som())

print(30*"-")
# Visualizar o MRO

# subclasse de varias classes base
class A:
    pass
class B:
    pass
class C:
    pass
class D(A,B,C):
    pass

print(D.mro())
