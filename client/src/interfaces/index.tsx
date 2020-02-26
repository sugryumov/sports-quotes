export interface IPropsListQuotes {
  items: Array<IQuoteItem>;
}
export interface IQuoteItem {
  id: string;
  quote: string;
  author: string;
}
export interface IQuote {
  item: IQuoteItem;
}
