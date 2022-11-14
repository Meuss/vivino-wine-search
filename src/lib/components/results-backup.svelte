<script>
  // this is just to style quickly without vivino
  let vinos = [
    {
      name: 'Louis Jadot Bourgogne Pinot Noir',
      link: 'https://www.vivino.com/CH/en/wines/1471186',
      thumb: 'https://images.vivino.com/thumbs/YtGIp7cLSRSUpucZV4RMuw_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.6,
      ratings: 36420
    },
    {
      name: 'Louis Jadot Bourgogne Couvent des Jacobins',
      link: 'https://www.vivino.com/CH/en/wines/1469154',
      thumb: 'https://images.vivino.com/thumbs/rGP_6ONCSRClwOj_HBFdtw_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.6,
      ratings: 27934
    },
    {
      name: 'Louis Latour Bourgogne Pinot Noir',
      link: 'https://www.vivino.com/CH/en/wines/1470344',
      thumb: 'https://images.vivino.com/thumbs/OlQRfPzBR0qG0VlCym74FA_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.6,
      ratings: 21695
    },
    {
      name: 'Louis Jadot Bourgogne Chardonnay',
      link: 'https://www.vivino.com/CH/en/wines/1469197',
      thumb: 'https://images.vivino.com/thumbs/Ym49EmguQyCsnDLXWa-ouA_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.8,
      ratings: 25878
    },
    {
      name: 'Bouchard Père & Fils Bourgogne Hautes-Côtes de Beaune',
      link: 'https://www.vivino.com/CH/en/wines/4377015',
      thumb: 'https://images.vivino.com/thumbs/DIZ7dxFjSqihrbuuCJZwFw_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne Hautes-Côtes de Beaune',
      average_rating: 3.8,
      ratings: 11057
    },
    {
      name: 'Joseph Drouhin Laforet Bourgogne Pinot Noir',
      link: 'https://www.vivino.com/CH/en/wines/1469443',
      thumb: 'https://images.vivino.com/thumbs/GT4f6t0vRTKXDTX_rNlEFQ_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.6,
      ratings: 14901
    },
    {
      name: 'Domaine Faiveley Pinot Noir Bourgogne',
      link: 'https://www.vivino.com/CH/en/wines/1498139',
      thumb: 'https://images.vivino.com/thumbs/Nr_QHTdjR2Gg7jEaaybNng_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.7,
      ratings: 14649
    },
    {
      name: 'Louis Bouillot Perle de Vigne Grande Reserve Crémant de Bourgogne Brut',
      link: 'https://www.vivino.com/CH/en/wines/164943159',
      thumb: 'https://images.vivino.com/thumbs/IpX123u8TYKsij6iN0Ft-Q_pb_300x300.png',
      country: 'France',
      region: 'Crémant de Bourgogne',
      average_rating: 3.8,
      ratings: 15611
    },
    {
      name: 'Bouchard Père & Fils Bourgogne Pinot Noir',
      link: 'https://www.vivino.com/CH/en/wines/1497566',
      thumb: 'https://images.vivino.com/thumbs/oxnHoubBSvqsVIIl54E8aw_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.5,
      ratings: 12515
    },
    {
      name: 'Albert Bichot Bourgogne Vieilles Vignes de Pinot Noir',
      link: 'https://www.vivino.com/CH/en/wines/1801838',
      thumb: 'https://images.vivino.com/thumbs/gzX2KU0kTleu8NKBW4EWuw_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.6,
      ratings: 11182
    },
    {
      name: "La Cave d'Augustin Florent Bourgogne Chardonnay",
      link: 'https://www.vivino.com/CH/en/wines/3373765',
      thumb: 'https://images.vivino.com/thumbs/bsyUuevvSUiqXKzJg77EyA_375x500.jpg',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.4,
      ratings: 3993
    },
    {
      name: 'Louis Latour Bourgogne Chardonnay',
      link: 'https://www.vivino.com/CH/en/wines/1520357',
      thumb: 'https://images.vivino.com/thumbs/fx2yQMFtSuGBrIRAYLSFLA_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.8,
      ratings: 8712
    },
    {
      name: 'Jean Bouchard Bourgogne Hautes-Côtes de Beaune',
      link: 'https://www.vivino.com/CH/en/wines/3235749',
      thumb: 'https://images.vivino.com/thumbs/9JGlpjToS_mtT6ZfxeJuig_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne Hautes-Côtes de Beaune',
      average_rating: 3.7,
      ratings: 3158
    },
    {
      name: "La Cave d'Augustin Florent Bourgogne Pinot Noir",
      link: 'https://www.vivino.com/CH/en/wines/4135151',
      thumb: 'https://images.vivino.com/thumbs/oUupzrI7RJuK3dyCLnXchA_375x500.jpg',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.3,
      ratings: 4540
    },
    {
      name: "Olivier Leflaive Bourgogne 'Les Sétilles'",
      link: 'https://www.vivino.com/CH/en/wines/1523312',
      thumb: 'https://images.vivino.com/thumbs/-MpMGuCUQYebx0vq2vj3rg_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 4,
      ratings: 14910
    },
    {
      name: "Jean-Claude Boisset Pinot Noir Bourgogne 'Les Ursulines'",
      link: 'https://www.vivino.com/CH/en/wines/2382990',
      thumb: 'https://images.vivino.com/thumbs/xlsTJ55RTiyHbZDf4olwOw_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.6,
      ratings: 9895
    },
    {
      name: 'Veuve Ambal Grande Cuvée Crémant de Bourgogne Brut',
      link: 'https://www.vivino.com/CH/en/wines/1849703',
      thumb: 'https://images.vivino.com/thumbs/cJXyXnLOTqag5wzQjuML7w_pb_300x300.png',
      country: 'France',
      region: 'Crémant de Bourgogne',
      average_rating: 3.8,
      ratings: 7992
    },
    {
      name: 'Bouchard Père & Fils Bourgogne Pinot Noir (La Vignée)',
      link: 'https://www.vivino.com/CH/en/wines/147312910',
      thumb: 'https://images.vivino.com/thumbs/ZTx2OsXURCqcimUDvCImrQ_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.6,
      ratings: 8065
    },
    {
      name: 'Antonin Rodet Bourgogne Pinot Noir',
      link: 'https://www.vivino.com/CH/en/wines/1482711',
      thumb: 'https://images.vivino.com/thumbs/ZD8sbFt0T-STWEFs7U28uA_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.4,
      ratings: 5803
    },
    {
      name: 'Louis Jadot Bourgogne Couvent Des Jacobins Blanc',
      link: 'https://www.vivino.com/CH/en/wines/1469152',
      thumb: 'https://images.vivino.com/thumbs/wlMZAi_cSG6VmVX6k9MFxA_pb_300x300.png',
      country: 'France',
      region: 'Bourgogne',
      average_rating: 3.7,
      ratings: 10411
    }
  ];
</script>

<div class="grid grid-cols-4 gap-16 my-16">
  {#each vinos as item}
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white text-darkblue p-8">
      <div class="aspect-square bg-contain bg-no-repeat bg-center" style="background-image: url({item.thumb});" />
      <div class="py-4">
        <div class="font-bold text-xl">{item.name}</div>
      </div>
      <div class="font-light text-md mb-2">{item.region} - {item.country}</div>
      <div class="flex items-center -ml-1">
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><title>Rating star</title><path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          /></svg
        >
        <p class="ml-2 text-sm font-bold">{item.average_rating}</p>
        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full" />
        <p class="text-sm font-medium text-gray-900">
          {item.ratings} ratings
        </p>
      </div>
    </div>
  {/each}
</div>
