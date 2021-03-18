import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  background-color: var(--green);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: auto 1fr;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">Dimples Direct</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </StyledHeader>
  );
}
