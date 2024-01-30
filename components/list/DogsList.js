// components/list/DogList.js
import Link from "next/link";
import classes from "../list/DogsList.module.css";

function DogsList(breeds) {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>list of dog breeds </h1>
      <div className={classes.list}>
        <ul className={classes.ul}>
          {breeds.breeds.map((breed) => (
            <li className={classes.li} key={breed}>
              <Link href={`/breed/${breed}`}>
                <a>{breed}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DogsList;
