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
        items: [
          {
            text: 'Cadastrar',
            path: '/cliente/cadastra-cliente'
          },
          {
            text: 'listar',
            path: '/cliente/lista-cliente'
          }
        ]
      },
      {
        text: 'Produto',
        items: [
          {
            text: 'Cadastrar',
            path: '/produto/cadastra-produto'
          },
          {
            text: 'Listar',
            path: '/produto/lista-produto'
          }
        ]
      }
    ]
  }
];
