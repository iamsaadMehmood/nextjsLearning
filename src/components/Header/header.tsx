import Link from "next/link";
import Image from "next/image";
export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            src={"/images/logo_black.png"}
            width={60}
            height={60}
            alt={"logo"}
          />
          <ul>
            <li>
              <Link passHref href="/">
                Home
              </Link>
            </li>
            <li>
              <Link passHref href="/events">
                Events
              </Link>
            </li>
            <li>
              <Link passHref href="/about-us">
                About Us
              </Link>
            </li>
          </ul>

          <nav></nav>
        </div>
        <p className="title">Lorem ipsum dolor sit amet amet.</p>
      </div>
    </header>
  );
};
