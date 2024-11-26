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
            text: 'listar',
            path: '/cliente/lista-cliente'
          },

          {
            text: 'Cadastrar',
            path: '/cliente/cadastra-cliente'
          }
        ]
      }
    ]
  }
];
