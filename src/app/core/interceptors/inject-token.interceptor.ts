import { HttpInterceptorFn } from '@angular/common/http';

export const InjectTokenInterceptor: HttpInterceptorFn = (req, next) => {
  try {
    const token = localStorage.getItem('token');
    let newRequest = req;
    newRequest = req.clone({
      setHeaders: {
        Authorization:`Bearer ${token}`
      }
    })
    return next(newRequest);
  } catch (error) {
    console.log('Algo salio mal intentar enviar la petición')
    console.log(error);
    return next(req);
  }
};
