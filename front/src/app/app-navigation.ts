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
        path: '/produto',
      },
      {
        text: 'Nota',
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
