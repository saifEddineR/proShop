import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {console.log([...Array(pages).keys()])}
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            className='paginate'
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === Number(page) ? true : false}>
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
