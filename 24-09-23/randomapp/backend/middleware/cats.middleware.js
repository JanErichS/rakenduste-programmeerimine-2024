export const catsRouteMiddleware = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

export const catsGetRouteMiddleware = (req, res, next) => {
  console.log("GET middleware");
  next();
};

export default { catsRouteMiddleware, catsGetRouteMiddleware };
