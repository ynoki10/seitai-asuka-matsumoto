import Link from 'next/link';

import { range } from '@/libs/range';
import { PER_PAGE } from '@/variables/voicesPerPage';

type Props = {
  totalCount: number;
  currentPage: number;
};

const Pagination = (props: Props) => {
  const { totalCount, currentPage } = props;
  const lastPage = Math.ceil(totalCount / PER_PAGE);

  return (
    <>
      <nav aria-label="pagination navigation">
        <ul className={`flex place-items-center justify-center gap-x-2`}>
          {currentPage !== 1 && (
            <li className={`h-10`}>
              <Link href={`/voices/page/${currentPage - 1}`}>
                <a
                  className={`grid place-items-center border-[1px] border-black h-full bg-white p-2 transition-opacity hover:opacity-75`}
                  aria-label="Go to previous page"
                >
                  <span className={`leading-none`}>{'<'}</span>
                </a>
              </Link>
            </li>
          )}

          {range(1, lastPage).map((number, index) => {
            if (currentPage === number) {
              return (
                <li className={`h-10`} key={index}>
                  <button
                    className={`grid place-items-center border-[1px] border-green03 h-full bg-green03 text-white p-2 cursor-auto`}
                    tabIndex={-1}
                    type="button"
                    aria-current="true"
                    aria-label={`page ${number}`}
                  >
                    <span className={`leading-none`}>{number}</span>
                  </button>
                </li>
              );
            } else {
              return (
                <li className={`h-10`} key={index}>
                  <Link href={`/voices/page/${number}`}>
                    <a
                      className={`grid place-items-center border-[1px] border-black h-full bg-white p-2 transition-opacity hover:opacity-75`}
                      aria-label={`page ${number}`}
                    >
                      <span className={`leading-none`}>{number}</span>
                    </a>
                  </Link>
                </li>
              );
            }
          })}

          {currentPage !== lastPage && (
            <li className={`h-10`}>
              <Link href={`/voices/page/${currentPage + 1}`}>
                <a
                  className={`grid place-items-center border-[1px] border-black h-full bg-white p-2 transition-opacity hover:opacity-75`}
                  tabIndex={0}
                  aria-label="Go to next page"
                >
                  <span className={`leading-none`}>{'>'}</span>
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
