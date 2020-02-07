import React, { useEffect, useContext } from "react";
import "./Content.scss";
import { StoreContext } from "../../context";
import { getQuotes } from "../../helpers/services";
import ListQuotes from "../../components/ListQuotes/ListQuotes";
import { Link } from "react-scroll";

function Content() {
  const context = useContext(StoreContext);

  useEffect(() => {
    getQuotes()
      .then(res => context.setQuotesList(res.data))
      .catch(err => console.log(err));
  }, []);

  const test = context.quotesList.map((item: any) => {
    return { id: item._id, quote: item.quote, author: item.author };
  });

  return (
    <main className="main">
      <h1 className="main__title">Sport quotes</h1>
      <p className="main__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem
        velit veritatis delectus laborum quaerat hic, officiis nobis
        repellendus? Temporibus accusamus ab voluptatem rem totam aliquam nihil
        sit ipsum sequi, facilis adipisci dolor qui quidem mollitia nisi, odio
        perferendis enim minima ex id ratione voluptates sed. Nostrum
        exercitationem a dolorum natus veritatis, nobis totam eum expedita modi
        commodi qui autem, sapiente tempora eveniet placeat fugit enim ea atque
        odit, iure eius id deserunt ratione. Possimus neque perferendis
        recusandae sint rem sapiente. Vero, ea? Magnam est minima corrupti
        perspiciatis ipsa hic, at quae recusandae ad error quas molestias cumque
        exercitationem possimus.
      </p>
      <Link
        activeClass="active"
        to="menu"
        spy
        smooth
        offset={-70}
        duration={500}
        className="arrow"
      />
      <ListQuotes items={test} />
    </main>
  );
}

export default Content;
