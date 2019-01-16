 /**
       * A class for performing AJAX calls.
       */
      class AJAX {
        /**
         * Performs a GET request to a given URL
         *
         * @param {URL | string} url The request URL
         * @param {Object} options Request options
         * @returns {Promise<any>}
         */
        get (url, options) {
          return fetch(url, { method: 'GET', ...options })
            .then((res) => res.json())
        }

        /**
         * Performs a POST request to a given URL with a given payload
         *
         * @param {URL | string} url The request URL
         * @param {any} payload Data submitted with the request
         * @param {Object} options Request options
         * @returns {Promise<any>}
         */
        post (url, payload, options) {
          return fetch(url, { method: 'POST', body: payload, ...options })
            .then((res) => res.json());
        }
      }


      class SpotifyAPI extends AJAX {
        /**
          * Queries the Spotify API for items of a given type matching the search query
          *
          * @param {string} query Album title query
          * @param {string} type Type of the requested search results
          * @returns {Promise<Object>}
          */
        search (query, type) {
          // const url = `/search?type=${type}&q=${query}&key=${this.API_KEY}`;
          const url = new URL('/search', this.BASE_URL);
          url.searchParams.set('type', type);
          url.searchParams.set('q', query);
          url.searchParams.set('key', this.API_KEY);

          return this.get(url);
        }

        /**
          * Queries the Spotify API for albums matching the search query
          *
          * @param {string} query Album title query
          * @returns {Promise<Object>}
          */
        searchAlbum (query) {
          return this.search(query, 'album');
        }

        /**
          * Queries the Spotify API for artists matching the search query
          *
          * @param {string} query Artist name query
          * @returns {Promise<Object>}
          */
        searchArtist (query) {
          return this.search(query, 'artist');
        }
      }

      SpotifyAPI.prototype.BASE_URL = 'http://flobe-online.de:3000';
      SpotifyAPI.prototype.API_KEY = '--- api key goes here ---';

      class SpotifyApp {
        /**
         * @param {HTMLInputElement} input
         * @param {HTMLDivElement} output
         */
        constructor (input, output) {
          this.input = input;
          this.output = output;
          this.api = new SpotifyAPI();
          // Unfortunately this cannot be eta-reduced due to this-scoping.
          this.input.addEventListener('keyup', (e) => this.queryHandler(e));
        }

        /**
         * @param {KeyboardEvent} e
         */
        async queryHandler (e) {
          try {
            // If enter was pressed and input has more than two letters
            if (e.keyCode === 13 && this.input.value.length > 2) {
              e.preventDefault();
              const results = await this.api.searchArtist(this.input.value)
              this.renderResults(results);
            }
          } catch (err) {
            console.error(err);
          }
        }

        renderResults (results) {
          this.output.innerHTML = '';

          const artists = results.artists.items;

          artists.forEach(({
            name,
            external_urls: {
              spotify: href
            },
            images: images,
          }) => {
            const wrapper = document.createElement('a');
            if (images.length) {
              const image = new Image();
              image.src = images[0].url;
              wrapper.appendChild(image);
            }
            wrapper.appendChild(document.createTextNode(name));
            wrapper.href = href;

            this.output.appendChild(wrapper);
          });
        }
      }

      window.addEventListener('DOMContentLoaded', () => {
        new SpotifyApp(
          document.querySelector('input'),
          document.querySelector('.output'),
        );
      });