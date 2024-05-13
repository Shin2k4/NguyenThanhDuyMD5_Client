import { lazy, Suspense } from "react";
import Loading from "@components/loading/Loading";
import ErrCom from "./ErrCom";

export const lazyFn = (importFunc: any, access: boolean = true) => {
  
  if(!access) {
    return <>Không có quyền truy cập</>
  }
  
  const LazyComponent = lazy(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(importFunc());
        }, 1000);
      });
    });
  //const LazyComponent = lazy(importFunc);

  return <Suspense fallback={<Loading/>}>
    <LazyComponent />
  </Suspense>;
};    

export const lazyFnReal = (importFunc: any, access: boolean = true , url : string ="") => {

  if (!access) {
    return <ErrCom url={url}/>
  }

  // const LazyComponent = lazy(() => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(importFunc());
  //     }, 1000);
  //   });
  // });
  const LazyComponent = lazy(importFunc);

  return <Suspense fallback={<Loading />}>
    <LazyComponent />
  </Suspense>;
};    
