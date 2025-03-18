import { useEffect } from "react";
import Papa from "papaparse";
import useGlobalContext from "../../state_management/ContextAPI/GlobalContextProvider";

export const useGetProducts = () => {
    const fileName = "/data/walmart_final.csv";
    const { productsList, setProductsList } = useGlobalContext();

    useEffect(() => {
        if (productsList?.length === 0) {
            fetch(fileName)
                .then((response) => response.text())
                .then((csvText) => {
                    Papa.parse(csvText, {
                        header: true,
                        skipEmptyLines: true,
                        delimitersToGuess: [
                            ",",
                            "\t",
                            "|",
                            ";",
                            Papa.RECORD_SEP,
                            Papa.UNIT_SEP,
                        ],
                        worker: true,
                        complete: (result) => {
                            //console.log(result);
                            setProductsList(result.data.slice(0, 50));
                        },
                        error: (error) => {
                            console.error("Error parsing CSV:", error);
                        },
                    });
                })
                .catch((err) => console.error("Error fetching CSV:", err));
        }
    }, [productsList]);
};

export const useGetPickleProducts = () => {
    const fileUrl = "/data/recommendations.json"; // Ensure this is served publicly
    const { recommendedProductsList, setRecommendedProductsList } =
        useGlobalContext([]);

    useEffect(() => {
        const fetchRecommendationsList = async () => {
            try {
                fetch(fileUrl)
                    .then((response) => response.json())
                    .then((data) => {
                        setRecommendedProductsList(data);
                    })
                    .catch((error) =>
                        console.error("Error loading recommendations:", error)
                    );
            } catch (error) {
                console.error("Error loading recommendations:", error);
            }
        };

        recommendedProductsList?.length === 0 && fetchRecommendationsList();
    }, [recommendedProductsList]);

    //return { recommendedProductsList };
};

// export const useGetPickleProducts = () => {
//     const fileUrl = "/data/walmart_cosine_similarities.pickle"; // Ensure this is served publicly
//     const [productsList, setProductsList] = useState([]);

//     useEffect(() => {
//         const fetchPickleFile = async () => {
//             try {
//                 const response = await fetch(fileUrl);
//                 if (!response.ok) {
//                     throw new Error(
//                         `Failed to fetch pickle file: ${response.statusText}`
//                     );
//                 }

//                 const arrayBuffer = await response.arrayBuffer();
//                 const buffer = new Uint8Array(arrayBuffer);

//                 const parser = new Parser();
//                 const parsedData = parser.parse(buffer);
//                 //const dataId = parsedData[4];
//                 console.log("Parsed DataID:", parsedData);
//                 setProductsList(parsedData);
//                 //console.log("Parsed Data:", parsedData[4]);
//             } catch (error) {
//                 console.error("Error loading pickle file:", error);
//             }
//         };

//         fetchPickleFile();
//     }, []);

//     return { productsList };
// };

// export const useGetPickleProducts = () => {
//     const fileName = "/data/walmart_cosine_similarities.pickle";
//     const { productsList, setProductsList } = useGlobalContext();

//     useEffect(() => {
//         const fileReader = new FileReader();
//         fileReader.readAsArrayBuffer(fileName);
//         fileReader.onload = () => {
//             const buffer = new Uint8Array(1);
//             const parser = new pickleparser.Parser();
//             const obj = parser.parse(buffer);
//             const jsonData = JSON.stringify(obj);
//             console.log(jsonData);
//         };
//         // if (productsList?.length === 0) {
//         //     fetch(fileName)
//         //         .then((response) => response.text())
//         //         .then((csvText) => {
//         //             Papa.parse(csvText, {
//         //                 header: true,
//         //                 skipEmptyLines: true,
//         //                 delimitersToGuess: [
//         //                     ",",
//         //                     "\t",
//         //                     "|",
//         //                     ";",
//         //                     Papa.RECORD_SEP,
//         //                     Papa.UNIT_SEP,
//         //                 ],
//         //                 worker: true,
//         //                 complete: (result) => {
//         //                     console.log(result);
//         //                     //setProductsList(result.data.slice(0, 10));
//         //                 },
//         //                 error: (error) => {
//         //                     console.error("Error parsing CSV:", error);
//         //                 },
//         //             });
//         //         })
//         //         .catch((err) => console.error("Error fetching CSV:", err));
//         // }
//     }, [productsList]);
// };
// useEffect(() => {
//     fetch("http://localhost:3001/data")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             setData(data);
//             setLoading(false);
//         })
//         .catch((error) => {
//             setError(error);
//             setLoading(false);
//         });
// }, []);
