import React, {useState} from 'react';
import ImageCard from '../../Components/SubCard/ImageCard';
import Pagination from '../../Components/Pagination';
import HomeLayout from '../../Layouts/HomeLayout';
import Link from 'next/link';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useRouter } from "next/router";
import MapG from '../../Components/Map';
import {
  useLoadScript,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import style from './style.module.css';
const libraries = ["places"];

const index = () => {
    const router = useRouter()
    const {
        query: { search },
    } = router
    const [searchData, setSearchData] = useState(search ? search : "")
    const data = require('./data');

    //maps
    const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: 'AIzaSyA7DPgVBt9bQ8rtDV4PCFEmacgLBFpjmVM',
      libraries,
    })
    //refs
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);
    const panTo = React.useCallback(({ lat, lng }) => {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(14);
    }, []);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const options = [
        'Price', 'Title', 'Time'
    ];
    const defaultOption = options[0];

    const handleChange = event => {
      setSearchData(event.target.value)
    }

    return (
      <HomeLayout>
        <>
          <div className="px-5 md:px-20 lg:px-28 w-full mt-5">
            <div className="relative">
              {isLoaded && <Search panTo={panTo} isLoaded={isLoaded} setSearch={setSearchData} searchData={searchData}/>}
            </div>
          </div>
          <div className="px-5 md:px-20 lg:px-28">
            {/* divide */}
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3">
                <div className="py-5 flex justify-between">
                  <p className="text-sm text-gray-500">1-6 of 300+</p>
                  <div className="flex justify-between">
                    <div className="flex items-center justify-center mr-3">
                      <p className="text-sm text-gray-500">Sort</p>
                    </div>
                    <Dropdown
                      className="text-xs text-gray-500"
                      options={options}
                      value={defaultOption}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <div className="grid  smd:grid-cols-2 justify-center md:grid-cols-2 lg:grid-cols-3  gap-7 smd:gap-4">
                  {currentPosts?.map((item) => (
                    <div className="cursor-pointer" key={item.id}>
                      <Link href={"/housesearch/" + item.id} key={item.id}>
                        <a>
                          <ImageCard
                            key={item.id.toString()}
                            title={item.title}
                            host={item.host}
                            price={item.price}
                          />
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="grid py-5 lg:mr-5">
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </div>
              <div className="w-1/3">
                <div className="py-5 w-full pl-5 hidden md:block">
                  <MapG panTo={panTo} isLoaded={isLoaded} loadError={loadError} onMapLoad={onMapLoad}/>
                </div>
              </div>
            </div>
          </div>
        </>
      </HomeLayout>
    );
}

function Search ({ setSearch, panTo, isLoaded }) {
    const onChangeValue = e => {
        setSearch(e.target.value);
    }

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className={style["search"]}>
      { isLoaded && <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          placeholder="Search city"
          style={{  borderWidth: 2 }}
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>}
    </div>
  );
}

export default index
