import Link from "next/link";

const Custom404 = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <Link href="/">
        <a>
          <div>Back to Home</div>
        </a>
      </Link>
    </div>
  );
};

export default Custom404;
