const Custom500 = () => {
  return (
    <div>
      <h2>500 - Something went wrong</h2>
      <p>Failed to fetch images for the breed.</p>
    </div>
  );
};

export default Custom500;

// pages/_error.js

/* const ErrorPage = ({ statusCode, title }) => {
      return (
        <div>
          <h1>Error {statusCode}</h1>
          <p>{title}</p>
        </div>
      );
    };
    
    ErrorPage.getInitialProps = ({ res, err }) => {
      const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
      const title = err ? err.message : "An error occurred";
    
      return { statusCode, title };
    };
    
    export default ErrorPage; */
