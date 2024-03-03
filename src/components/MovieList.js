import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Heading from "./Heading";

const data =
{
    "dates": {
        "maximum": "2024-03-27",
        "minimum": "2024-03-06"
    },
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
            "genre_ids": [
                28,
                27,
                53
            ],
            "id": 1096197,
            "original_language": "en",
            "original_title": "No Way Up",
            "overview": "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
            "popularity": 2853.409,
            "poster_path": "/8qXNH7yXfQF7XYe3oDBMuXCYCLg.jpg",
            "release_date": "2024-01-18",
            "title": "No Way Up",
            "video": false,
            "vote_average": 5.702,
            "vote_count": 62
        },
        {
            "adult": false,
            "backdrop_path": "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
            "genre_ids": [
                28,
                53,
                10752
            ],
            "id": 969492,
            "original_language": "en",
            "original_title": "Land of Bad",
            "overview": "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
            "popularity": 2089.144,
            "poster_path": "/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg",
            "release_date": "2024-01-25",
            "title": "Land of Bad",
            "video": false,
            "vote_average": 7.088,
            "vote_count": 188
        },
        {
            "adult": false,
            "backdrop_path": "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
            "genre_ids": [
                35,
                10749
            ],
            "id": 1072790,
            "original_language": "en",
            "original_title": "Anyone But You",
            "overview": "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
            "popularity": 1454.065,
            "poster_path": "/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
            "release_date": "2023-12-21",
            "title": "Anyone But You",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 674
        },
        {
            "adult": false,
            "backdrop_path": "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
            "genre_ids": [
                16,
                28,
                12,
                35,
                10751
            ],
            "id": 940551,
            "original_language": "en",
            "original_title": "Migration",
            "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
            "popularity": 1063.373,
            "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
            "release_date": "2023-12-06",
            "title": "Migration",
            "video": false,
            "vote_average": 7.627,
            "vote_count": 778
        },
        {
            "adult": false,
            "backdrop_path": "/qBQV4i2sjIydDJUKm7pwvpyfy5p.jpg",
            "genre_ids": [
                878,
                12
            ],
            "id": 693134,
            "original_language": "en",
            "original_title": "Dune: Part Two",
            "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
            "popularity": 897.378,
            "poster_path": "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
            "release_date": "2024-02-27",
            "title": "Dune: Part Two",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 67
        },
        {
            "adult": false,
            "backdrop_path": "/mhqaXKEr1ONiHnaXvEAj7lSMEUQ.jpg",
            "genre_ids": [
                878,
                10749,
                35
            ],
            "id": 792307,
            "original_language": "en",
            "original_title": "Poor Things",
            "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
            "popularity": 858.647,
            "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
            "release_date": "2023-12-07",
            "title": "Poor Things",
            "video": false,
            "vote_average": 8.103,
            "vote_count": 1434
        },
        {
            "adult": false,
            "backdrop_path": "/uF6ah2oXklyw3gU9ByWLKJ0tyfg.jpg",
            "genre_ids": [
                18,
                53
            ],
            "id": 1026436,
            "original_language": "en",
            "original_title": "Miller's Girl",
            "overview": "A precocious young writer becomes involved with her high school creative writing teacher in a dark coming-of-age drama that examines the blurred lines of emotional connectivity between professor and protégé.",
            "popularity": 808.082,
            "poster_path": "/wKCKKur7LyGFaUHmNhvy7FhIjmC.jpg",
            "release_date": "2024-01-18",
            "title": "Miller's Girl",
            "video": false,
            "vote_average": 6.57,
            "vote_count": 128
        },
        {
            "adult": false,
            "backdrop_path": "/dmiN2rakG9hZW04Xx7mHOoHTOyD.jpg",
            "genre_ids": [
                35
            ],
            "id": 673593,
            "original_language": "en",
            "original_title": "Mean Girls",
            "overview": "New student Cady Heron is welcomed into the top of the social food chain by the elite group of popular girls called ‘The Plastics,’ ruled by the conniving queen bee Regina George and her minions Gretchen and Karen. However, when Cady makes the major misstep of falling for Regina’s ex-boyfriend Aaron Samuels, she finds herself prey in Regina’s crosshairs. As Cady sets to take down the group’s apex predator with the help of her outcast friends Janis and Damian, she must learn how to stay true to herself while navigating the most cutthroat jungle of all: high school.",
            "popularity": 434.295,
            "poster_path": "/fbbj3viSUDEGT1fFFMNpHP1iUjw.jpg",
            "release_date": "2024-01-10",
            "title": "Mean Girls",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 180
        },
        {
            "adult": false,
            "backdrop_path": "/uUiIGztTrfDhPdAFJpr6m4UBMAd.jpg",
            "genre_ids": [
                14,
                28,
                878
            ],
            "id": 634492,
            "original_language": "en",
            "original_title": "Madame Web",
            "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
            "popularity": 370.443,
            "poster_path": "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
            "release_date": "2024-02-14",
            "title": "Madame Web",
            "video": false,
            "vote_average": 5.4,
            "vote_count": 274
        },
        {
            "adult": false,
            "backdrop_path": "/bPe6svQylMx7zS4RyuMJbOL46ao.jpg",
            "genre_ids": [
                10402,
                18
            ],
            "id": 802219,
            "original_language": "en",
            "original_title": "Bob Marley: One Love",
            "overview": "Jamaican singer-songwriter Bob Marley overcomes adversity to become the most famous reggae musician in the world.",
            "popularity": 286.608,
            "poster_path": "/mKWalirPreEdCKDJjc5TKeOP2xi.jpg",
            "release_date": "2024-02-14",
            "title": "Bob Marley: One Love",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 153
        },
        {
            "adult": false,
            "backdrop_path": "/veIyxxi5Gs8gvztLEW1Ysb8rrzs.jpg",
            "genre_ids": [
                28,
                878,
                12
            ],
            "id": 823464,
            "original_language": "en",
            "original_title": "Godzilla x Kong: The New Empire",
            "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
            "popularity": 275.307,
            "poster_path": "/bQ2ywkchIiaKLSEaMrcT6e29f91.jpg",
            "release_date": "2024-03-27",
            "title": "Godzilla x Kong: The New Empire",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
            "genre_ids": [
                28,
                35
            ],
            "id": 897087,
            "original_language": "en",
            "original_title": "Freelance",
            "overview": "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
            "popularity": 273.757,
            "poster_path": "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
            "release_date": "2023-10-05",
            "title": "Freelance",
            "video": false,
            "vote_average": 6.567,
            "vote_count": 587
        },
        {
            "adult": false,
            "backdrop_path": "/3CZkoreoWflCGmpXLm7CTX1vBrT.jpg",
            "genre_ids": [
                28,
                12,
                16,
                35,
                10751
            ],
            "id": 1011985,
            "original_language": "en",
            "original_title": "Kung Fu Panda 4",
            "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
            "popularity": 250.62,
            "poster_path": "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
            "release_date": "2024-03-06",
            "title": "Kung Fu Panda 4",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/aPQsU3yLDUOhLJYnSqkhKRkQTAw.jpg",
            "genre_ids": [
                36,
                18,
                10752
            ],
            "id": 467244,
            "original_language": "en",
            "original_title": "The Zone of Interest",
            "overview": "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
            "popularity": 244.786,
            "poster_path": "/hUu9zyZmDd8VZegKi1iK1Vk0RYS.jpg",
            "release_date": "2023-12-15",
            "title": "The Zone of Interest",
            "video": false,
            "vote_average": 7.355,
            "vote_count": 463
        },
        {
            "adult": false,
            "backdrop_path": "/nvW0QfRJ7ga9TK8DKwBfAPA8ywP.jpg",
            "genre_ids": [
                28,
                18,
                80
            ],
            "id": 944401,
            "original_language": "en",
            "original_title": "Dogman",
            "overview": "A boy, bruised by life, finds his salvation through the love of his dogs.",
            "popularity": 196.633,
            "poster_path": "/rmRkZZ2aZq72dDTjbPnSLtPQcmJ.jpg",
            "release_date": "2023-09-27",
            "title": "Dogman",
            "video": false,
            "vote_average": 7.349,
            "vote_count": 298
        },
        {
            "adult": false,
            "backdrop_path": "/7grv5ULlK9wMr2T1fkgr56HlbT.jpg",
            "genre_ids": [
                18,
                36,
                10752
            ],
            "id": 760774,
            "original_language": "en",
            "original_title": "One Life",
            "overview": "British stockbroker Nicholas Winton visits Czechoslovakia in the 1930s and forms plans to assist in the rescue of Jewish children before the onset of World War II, in an operation that came to be known as the Kindertransport.",
            "popularity": 185.454,
            "poster_path": "/yvnIWt2j8VnDgwKJE2VMiFMa2Qo.jpg",
            "release_date": "2023-09-09",
            "title": "One Life",
            "video": false,
            "vote_average": 7.701,
            "vote_count": 127
        },
        {
            "adult": false,
            "backdrop_path": "/2GzgongTSptjSkT7iCoXUcGIVB9.jpg",
            "genre_ids": [
                10749,
                18,
                14
            ],
            "id": 994108,
            "original_language": "en",
            "original_title": "All of Us Strangers",
            "overview": "One night in his near-empty tower block in contemporary London, Adam has a chance encounter with a mysterious neighbor Harry, which punctures the rhythm of his everyday life. As a relationship develops between them, Adam is preoccupied with memories of the past and finds himself drawn back to the suburban town where he grew up, and the childhood home where his parents appear to be living, just as they were on the day they died, 30 years before.",
            "popularity": 172.164,
            "poster_path": "/aviJMFZSnnCAsCVyJGaPNx4Ef3i.jpg",
            "release_date": "2023-12-22",
            "title": "All of Us Strangers",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 179
        },
        {
            "adult": false,
            "backdrop_path": "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
            "genre_ids": [
                16,
                10751,
                35,
                14
            ],
            "id": 508947,
            "original_language": "en",
            "original_title": "Turning Red",
            "overview": "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
            "popularity": 168.135,
            "poster_path": "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
            "release_date": "2022-03-10",
            "title": "Turning Red",
            "video": false,
            "vote_average": 7.406,
            "vote_count": 4784
        },
        {
            "adult": false,
            "backdrop_path": "/p9DKeXp6FPJtAQ1k13Z4zPWrCbN.jpg",
            "genre_ids": [
                18
            ],
            "id": 1058694,
            "original_language": "en",
            "original_title": "Radical",
            "overview": "In a Mexican border town plagued by neglect, corruption, and violence, a frustrated teacher tries a radical new method to break through his students’ apathy and unlock their curiosity, their potential… and maybe even their genius.",
            "popularity": 167.121,
            "poster_path": "/eSatbygYZp8ooprBHZdb6GFZxGB.jpg",
            "release_date": "2023-10-19",
            "title": "Radical",
            "video": false,
            "vote_average": 8.502,
            "vote_count": 262
        },
        {
            "adult": false,
            "backdrop_path": "/hIeEpk2w1dnC9ly9ZJwwbunH2Cx.jpg",
            "genre_ids": [
                16,
                35,
                18,
                10751
            ],
            "id": 838240,
            "original_language": "es",
            "original_title": "Robot Dreams",
            "overview": "Dog lives in Manhattan and he's tired of being alone. One day he decides to build himself a robot, a companion. Their friendship blossoms, until they become inseparable, to the rhythm of 80's NYC. One summer night, Dog, with great sadness, is forced to abandon Robot at the beach. Will they ever meet again?",
            "popularity": 166.892,
            "poster_path": "/qLtK6DFeuJNuB3THGVDklirhQ8u.jpg",
            "release_date": "2023-10-20",
            "title": "Robot Dreams",
            "video": false,
            "vote_average": 7.261,
            "vote_count": 71
        }
    ],
    "total_pages": 44,
    "total_results": 874
}

const MovieList = () => {
    const [movies, setMovies] = useState(data.results);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=53eafc90abf7f2884c7c8e01d0a1efab")
            .then(res => res.json())
            .then(data => setMovies(data.results || []));
    }, []);
    return (
        <>
            <Heading />
            <div className="movie-list">
                {!movies.length && <h1>Loading...</h1>}
                {
                    movies?.map(movie => (
                        <MovieCard movie={movie} />
                    ))
                }
            </div>
        </>
    )
}

export default MovieList;