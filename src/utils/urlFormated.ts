export const urlFormated = ({
  pageNumber,
  quantityResult,
  orderAlphabetical,
  orderRating,
  filterPrice,
  filterGenre,
}: {
  pageNumber?: string;
  quantityResult?: string;
  orderAlphabetical?: string;
  orderRating?: string;
  filterPrice?: string;
  filterGenre?: string;
}) => {
  let urlFormated = "/games/list";
  if (
    !pageNumber &&
    !quantityResult &&
    !orderAlphabetical &&
    !orderRating &&
    !filterPrice &&
    !filterGenre
  ) {
    return `${import.meta.env.VITE_SOME_BASE_URL
      }/games/list?quantityResult=9&orderRating=ASC`;
  }
  if (quantityResult) {
    urlFormated = `${urlFormated}?quantityResult=${quantityResult}`;
  } else {
    urlFormated = `${urlFormated}?quantityResult=${"9"}`;
  }

  if (pageNumber) {
    urlFormated = `${urlFormated}&pageNumber=${pageNumber}`;
  } else {
    urlFormated = `${urlFormated}&pageNumber=${"nothing"}`;
  }

  if (orderAlphabetical) {
    urlFormated = `${urlFormated}&orderAlphabetical=${orderAlphabetical}`;
  } else {
    urlFormated = `${urlFormated}&orderAlphabetical=${"nothing"}`;
  }
  if (orderRating) {
    urlFormated = `${urlFormated}&orderRating=${orderRating}`;
  } else {
    urlFormated = `${urlFormated}&orderRating=${"nothing"}`;
  }
  if (filterPrice) {
    urlFormated = `${urlFormated}&filterPrice=${filterPrice}`;
  } else {
    urlFormated = `${urlFormated}&filterPrice=${"nothing"}`;
  }
  if (filterGenre) {
    urlFormated = `${urlFormated}&filterGenre=${filterGenre}`;
  } else {
    urlFormated = `${urlFormated}&filterGenre=${"nothing"}`;
  }
  return `${import.meta.env.VITE_SOME_BASE_URL}${urlFormated}`;
};


