# Bookwise

Um projeto desenvolvido para a pratica das features mais recentes do NextJS.

Bookwise é um sistema de avaliação de livros. Essas avaliações podem ser acessadas publicamente, sem a necessidade de autenticação.  
Todavia avaliar algum livro ou acessar perfis de avalidadores é necessário estar autenticado.
É possivel acessar avaliações mais recentes e os livros mais avalidados, alem de ter essa visualização por livro e por avaliador.

## Techs

O projeto conta com o uso da App Router do [**NextJS**](https://nextjs.org/), que utiliza os Server Components para contruir as rotas usando o [**React**](https://react.dev/) totalmente no lado do servidor.

Para a contrução da interface, utiliza p [**TailwindCSS**](https://tailwindcss.com/) para estilizar as páginas.

Além disso, paro o back-end, o projeto conta com o uso do [**NextAuth**](https://next-auth.js.org/) para conseguir autenticar o usuário e fazer um controle de rotas e avaliação de livros.

Para armazenar essas informações utiliza de um banco dados Postgres _serveless_, disponibilizado na nuvem pelo [**Neon Tech**](https://neon.tech/), utilizando o [**Prisma**](https://www.prisma.io/) para realizar as consultas e operações de escrita no banco de dados.

![](/bookwise.png)
