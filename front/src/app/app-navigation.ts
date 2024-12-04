export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Gerenciar',
    icon: 'folder',
    items: [
      {
        text: 'select-box',
        path: '/select-box'
      },
      {
        text: 'Clientes',
        path: '/cliente'
      },
      {
        text: 'Produtos',
        path: '/produto',
      },
      {
        text: 'Notas',
        items: [
          {
            text: 'Cadastrar',
            path: '/nota/cadastra-nota'
          },
          {
            text: 'Listar',
            path: '/nota/lista-nota'
          }
        ]
      }
    ]
  }
];
