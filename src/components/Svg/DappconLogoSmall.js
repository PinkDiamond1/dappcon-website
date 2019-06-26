import React from 'react'

const DappconLogoSmall = ({ width = 31, height = 41, fill = '' }) => {
  const props = {}

  if (fill) {
    props.fill = fill
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 31 41"
      stroke="none"
    >
      <g fill="none" fillRule="evenodd">
        <path
          {...props}
          d="M5.84 25L0 28.539l1.95 2.822 3.02-1.82v8.056H1.533V41H12v-3.403H9.092V25z"
        />
        <g transform="translate(17.913)">
          <path
            {...props}
            d="M.626 10.44c.05-.04.075-.1.103-.146l1.09-1.73c.483-.768.966-1.53 1.45-2.299.28-.443.56-.89.837-1.333.491-.784.987-1.563 1.478-2.346.269-.424.533-.852.802-1.275.156-.249.313-.494.47-.744.037-.063.045-.063.083 0 .177.281.354.566.532.847.578.922 1.16 1.844 1.738 2.77l1.127 1.792c.566.903 1.132 1.805 1.701 2.707.36.57.718 1.14 1.073 1.71.005.007.009.011.013.02.025.046.025.05-.02.078-.133.076-.26.15-.393.222-.904.51-1.808 1.025-2.713 1.535-.845.479-1.692.957-2.542 1.44-.165.095-.33.186-.496.282-.045.027-.082.027-.132 0l-2.47-1.406c-.66-.375-1.32-.747-1.98-1.123-.554-.312-1.107-.625-1.66-.942-.029-.016-.058-.035-.09-.04v-.02z"
          />
        </g>
        <path
          {...props}
          d="M18.535 12.294c.029 0 .049.016.074.028.326.186.652.372.978.554.644.364 1.288.728 1.932 1.096l1.033.585 1.994 1.128c.062.036.127.067.186.107.04.027.074.027.119 0 .302-.174.603-.345.904-.515.784-.442 1.565-.886 2.35-1.329l1.906-1.08c.323-.182.649-.364.97-.546.017-.009.033-.028.059-.02.004.023-.013.035-.021.047-.483.653-.97 1.306-1.453 1.96-.45.605-.896 1.21-1.342 1.812-.442.593-.883 1.186-1.321 1.784-.43.578-.855 1.156-1.284 1.729-.256.344-.512.689-.768 1.037l-.05.071h-.012a.288.288 0 0 0-.062-.095c-.165-.221-.33-.447-.495-.669l-.88-1.187-.867-1.175-.78-1.056-.933-1.262-.669-.907c-.256-.344-.507-.688-.763-1.032l-.756-1.022c-.012-.015-.02-.035-.046-.04-.003.005-.003 0-.003-.003M.209 18.425H6.34c1.397 0 2.664-.19 3.8-.568 1.136-.378 2.084-.908 2.843-1.59a6.993 6.993 0 0 0 1.758-2.46c.413-.956.62-2.007.62-3.15 0-1.142-.214-2.195-.644-3.16a7.116 7.116 0 0 0-1.813-2.475c-.779-.686-1.738-1.221-2.879-1.607-1.14-.386-2.392-.579-3.757-.579H.208v15.59zm4.06-3.268V6.115h2.095c.883 0 1.686.197 2.41.59a4.298 4.298 0 0 1 1.691 1.628c.405.693.608 1.467.608 2.325 0 .5-.076.978-.229 1.435-.152.457-.373.87-.662 1.238-.29.367-.634.69-1.036.964a4.774 4.774 0 0 1-1.385.638 6.04 6.04 0 0 1-1.674.224H4.268zM23.877 23.812c-1.19 0-2.269.227-3.237.68-.967.454-1.736 1.105-2.305 1.954-.57.849-.855 1.816-.855 2.902 0 .83.144 1.58.434 2.255.289.675.678 1.23 1.169 1.664.49.433 1.05.767 1.684 1 .632.232 1.3.349 2.003.349a6.63 6.63 0 0 0 2.928-.652c-.468.97-1.193 1.777-2.173 2.425-.98.647-2.27 1.18-3.87 1.6l1.143 3.01c1.466-.255 2.802-.713 4.009-1.372 1.206-.659 2.215-1.449 3.028-2.372a10.211 10.211 0 0 0 1.885-3.122c.444-1.16.666-2.366.666-3.622 0-1.318-.27-2.485-.81-3.501a5.766 5.766 0 0 0-2.294-2.36c-.989-.56-2.124-.838-3.405-.838m-2.4 5.629c0-.652.23-1.185.69-1.6.46-.414 1.048-.622 1.76-.622.47 0 .892.118 1.27.355.376.237.678.582.904 1.035.226.454.34.979.34 1.576v.116c-.227.233-.48.436-.761.61-.28.175-.587.313-.917.414-.331.1-.66.15-.987.15-.687 0-1.242-.182-1.665-.546-.423-.364-.635-.86-.635-1.488"
        />
      </g>
    </svg>
  )
}

export default DappconLogoSmall
