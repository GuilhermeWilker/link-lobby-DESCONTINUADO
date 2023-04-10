export const requireAuth = async (to, from, next) => {
  if (!authenticate) {
    next({ name: "login" }); // redireciona para página de login
  } else {
    next(); // permite acesso à rota
  }
};
