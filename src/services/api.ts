const BASE = 'http://localhost:5000';

export async function listarFuncionarios() {
  const res = await fetch(`${BASE}/Funcionarios`);
  if (!res.ok) throw new Error('Erro ao listar');
  return res.json();
}

export async function obterFuncionario(id: number) {
  const res = await fetch(`${BASE}/Funcionarios/${id}`);
  if (!res.ok) throw new Error('Erro ao obter');
  return res.json();
}

export async function criarFuncionario(data: any) {
  const res = await fetch(`${BASE}/Funcionarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Erro ao criar');
  return res.json();
}

export async function atualizarFuncionario(id: number, data: any) {
  const res = await fetch(`${BASE}/Funcionarios/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Erro ao atualizar');
  return res.json();
}

export async function deletarFuncionario(id: number) {
  const res = await fetch(`${BASE}/Funcionarios/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Erro ao excluir');
  return true;
}
