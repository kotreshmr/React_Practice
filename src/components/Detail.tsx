import React from "react";

function Detail({ country }) {
  if (country == "India") {
    return (
      <p>
        India (ISO: Bhārat), also known as the Republic of India (ISO: Bhārat
        Gaṇarājya),[18][e] is a country in South Asia. It is the seventh-largest
        country by area, the second-most populous country, and the most populous
        democracy in the world. Bounded by the Indian Ocean on the south, the
        Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it
        shares land borders with Pakistan to the west;[f] China, Nepal, and
        Bhutan to the northeast; and Bangladesh and Myanmar to the east. In the
        Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives;
        its Andaman and Nicobar Islands share a maritime border with Thailand
        and Indonesia.
      </p>
    );
  } else if (country == "Japan") {
    return (
      <p>
        Japan is an island country in East Asia. Located in the Pacific Ocean,
        it lies off the eastern coast of the Asian continent and stretches from
        the Sea of Okhotsk in the north to the East China Sea and the Philippine
        Sea in the south.
      </p>
    );
  } else if (country == "Australia") {
    return (
      <p>
        Australia, officially the Commonwealth of Australia, is a sovereign
        country comprising the mainland of the Australian continent, the island
        of Tasmania and numerous smaller islands. It is the largest country in
        Oceania and the world's sixth-largest country by total area. The
        neighbouring countries are Papua New Guinea, Indonesia and East Timor to
        the north; the Solomon Islands and Vanuatu to the north-east; and New
        Zealand to the south-east. The population of 25 million[6] is highly
        urbanised and heavily concentrated on the eastern seaboard.[13]
        Australia's capital is Canberra, and its largest city is Sydney. The
        country's other major metropolitan areas are Melbourne, Brisbane, Perth
        and Adelaide.
      </p>
    );
  } else {
    return <h2>Please Select the country from drop down to view details</h2>;
  }
}
export default Detail;
