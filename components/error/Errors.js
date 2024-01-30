//components/error/Errors.js
import classes from "./Errors.module.css";

function Errors(props) {
  return <div className={classes.error}>Error: {props.errorMsg}</div>;
}

export default Errors;

//pages/500.js
/* const Custom500 = () => {
  return (
    <div>
      <h1>500 - Something went wrong</h1>
      <p>Failed to fetch images for the breed.</p>
    </div>
  );
};

export default Custom500; */

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
