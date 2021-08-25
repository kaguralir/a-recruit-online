import { useState, useEffect } from "react";
import Router from "next/router";

const Layout = props => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const updateLoadingStatus = () => setIsLoading(!isLoading);

    Router.events.on("routeChangeStart", updateLoadingStatus);
    Router.events.on("routeChangeComplete", updateLoadingStatus);

    return () => {
      Router.events.off("routeChangeStart", updateLoadingStatus);
      Router.events.off("routeChangeComplete", updateLoadingStatus);
    };
  }, [isLoading]);

  return (
    <div>
        { isLoading ?
            <div className="Loading">
               <div className="wrap">
                <div className="loading">
                    <div className="bounceball"></div>
                    <div className="text">CHARGEMENT ...</div>
                </div>
                </div>
            </div>
        : props.children }
    </div>
  );
}

export default Layout;

