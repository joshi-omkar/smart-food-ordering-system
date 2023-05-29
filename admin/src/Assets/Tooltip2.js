import * as React from "react"
const Tooltip2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={246}
    height={192}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect width={236} height={182} x={5} y={5} fill="#1F1D2B" rx={12} />
    </g>
    <path
      fill="#fff"
      d="M23.954 144.196v-2.651h13.927v2.651h-5.395V159h-3.137v-14.804h-5.395Zm20.287 15.06c-1.279 0-2.387-.282-3.324-.844-.938-.563-1.665-1.35-2.182-2.361-.511-1.011-.767-2.193-.767-3.545 0-1.353.256-2.537.767-3.554.517-1.017 1.244-1.807 2.182-2.37.937-.562 2.045-.843 3.324-.843 1.278 0 2.386.281 3.324.843.937.563 1.662 1.353 2.173 2.37.517 1.017.776 2.201.776 3.554 0 1.352-.259 2.534-.776 3.545-.511 1.011-1.236 1.798-2.173 2.361-.938.562-2.046.844-3.324.844Zm.017-2.472c.693 0 1.273-.19 1.738-.571.466-.386.813-.903 1.04-1.551.233-.648.35-1.369.35-2.165 0-.801-.117-1.525-.35-2.173-.227-.654-.574-1.173-1.04-1.56-.465-.386-1.045-.579-1.738-.579-.71 0-1.301.193-1.773.579-.466.387-.815.906-1.048 1.56-.227.648-.341 1.372-.341 2.173 0 .796.114 1.517.34 2.165.234.648.583 1.165 1.05 1.551.47.381 1.062.571 1.772.571Zm15.411-10.875v2.386h-7.525v-2.386h7.525Zm-5.668-3.136h3.086v12.289c0 .415.062.733.187.955.13.216.301.364.511.443.21.08.444.12.7.12.193 0 .369-.015.528-.043.165-.028.29-.054.375-.077l.52 2.412c-.165.057-.4.119-.708.188a5.78 5.78 0 0 1-1.108.119c-.772.023-1.468-.094-2.088-.349a3.25 3.25 0 0 1-1.474-1.211c-.358-.545-.534-1.227-.529-2.045v-12.801Zm12.015 16.491c-.83 0-1.576-.148-2.241-.443a3.652 3.652 0 0 1-1.568-1.33c-.381-.585-.571-1.306-.571-2.164 0-.739.136-1.35.409-1.833a3.168 3.168 0 0 1 1.116-1.159 5.633 5.633 0 0 1 1.594-.656 12.992 12.992 0 0 1 1.85-.332c.766-.08 1.389-.151 1.866-.213.477-.069.824-.171 1.04-.307.221-.142.332-.361.332-.657v-.051c0-.642-.19-1.139-.571-1.491-.38-.352-.929-.529-1.645-.529-.756 0-1.355.165-1.798.495-.438.329-.733.718-.886 1.167l-2.881-.409c.227-.795.602-1.46 1.125-1.994a4.89 4.89 0 0 1 1.917-1.21c.756-.273 1.591-.409 2.506-.409.63 0 1.259.073 1.884.221a5.304 5.304 0 0 1 1.713.733c.517.335.931.793 1.244 1.372.318.58.477 1.304.477 2.174V159h-2.966v-1.798h-.102a3.77 3.77 0 0 1-.793 1.022c-.335.313-.758.566-1.27.759-.505.187-1.099.281-1.78.281Zm.801-2.267c.62 0 1.157-.122 1.611-.366.455-.25.804-.58 1.049-.989.25-.409.375-.855.375-1.338v-1.543c-.097.08-.262.154-.495.222a7.001 7.001 0 0 1-.767.179c-.284.051-.565.097-.844.136l-.724.103c-.46.062-.872.164-1.236.306a2.05 2.05 0 0 0-.86.597c-.21.25-.316.574-.316.972 0 .568.207.997.622 1.286.415.29.943.435 1.585.435Zm12.299-15.452V159H76.03v-17.455h3.085Zm24.858 8.728c0 1.88-.352 3.491-1.056 4.832-.699 1.335-1.654 2.358-2.864 3.068-1.205.711-2.571 1.066-4.1 1.066-1.528 0-2.897-.355-4.107-1.066-1.205-.716-2.16-1.741-2.864-3.076-.699-1.341-1.048-2.949-1.048-4.824 0-1.881.35-3.489 1.048-4.824.704-1.341 1.659-2.367 2.864-3.077 1.21-.71 2.58-1.065 4.108-1.065 1.528 0 2.894.355 4.099 1.065 1.21.71 2.165 1.736 2.864 3.077.704 1.335 1.056 2.943 1.056 4.824Zm-3.179 0c0-1.324-.207-2.441-.622-3.35-.409-.914-.977-1.605-1.704-2.071-.727-.471-1.566-.707-2.514-.707-.95 0-1.787.236-2.515.707-.727.466-1.298 1.157-1.713 2.071-.409.909-.613 2.026-.613 3.35 0 1.324.204 2.443.613 3.358.415.909.986 1.599 1.713 2.071.728.466 1.566.699 2.514.699.95 0 1.788-.233 2.515-.699.727-.472 1.295-1.162 1.704-2.071.415-.915.622-2.034.622-3.358Zm6.032 8.727v-13.091h2.992v2.182h.136c.239-.756.648-1.338 1.228-1.747a3.373 3.373 0 0 1 2.002-.622c.171 0 .361.008.571.025.216.012.395.031.537.06v2.838a3.189 3.189 0 0 0-.622-.119 5.683 5.683 0 0 0-.809-.06c-.563 0-1.069.122-1.518.366a2.683 2.683 0 0 0-1.048.998c-.256.426-.383.917-.383 1.474V159h-3.086Zm13.835.23c-1.028 0-1.949-.264-2.761-.792-.813-.529-1.455-1.296-1.927-2.302-.471-1.005-.707-2.227-.707-3.664 0-1.455.239-2.682.716-3.682.483-1.006 1.133-1.764 1.952-2.276a5.014 5.014 0 0 1 2.735-.775c.768 0 1.398.13 1.892.392.495.255.887.565 1.177.929.289.358.514.696.673 1.014h.128v-6.529h3.094V159h-3.035v-2.062h-.187a5.277 5.277 0 0 1-.69 1.014c-.302.352-.699.653-1.194.903-.494.25-1.116.375-1.866.375Zm.861-2.531c.653 0 1.21-.176 1.67-.529.46-.358.81-.855 1.048-1.491.239-.636.358-1.378.358-2.224 0-.847-.119-1.583-.358-2.208-.232-.625-.579-1.111-1.039-1.457-.455-.347-1.014-.52-1.679-.52-.688 0-1.262.179-1.722.537-.46.358-.807.852-1.04 1.483-.233.63-.349 1.352-.349 2.165 0 .818.116 1.548.349 2.19.239.636.588 1.139 1.049 1.508.466.364 1.037.546 1.713.546Zm15.194 2.557c-1.313 0-2.446-.273-3.401-.818a5.542 5.542 0 0 1-2.19-2.336c-.512-1.011-.767-2.201-.767-3.571 0-1.346.255-2.528.767-3.545.517-1.023 1.238-1.818 2.164-2.387.927-.573 2.015-.86 3.265-.86.807 0 1.568.13 2.284.392a5.153 5.153 0 0 1 1.909 1.193c.557.54.994 1.227 1.312 2.062.319.83.478 1.819.478 2.966v.946h-10.73v-2.079h7.772c-.005-.591-.133-1.117-.383-1.577-.25-.466-.6-.832-1.049-1.099-.443-.267-.96-.401-1.551-.401-.63 0-1.184.153-1.662.46a3.173 3.173 0 0 0-1.116 1.193 3.445 3.445 0 0 0-.401 1.611v1.816c0 .761.14 1.414.418 1.96.278.54.668.954 1.168 1.244.5.284 1.085.426 1.755.426.449 0 .855-.062 1.219-.187.364-.131.679-.321.946-.571.267-.25.469-.56.605-.929l2.881.324a4.497 4.497 0 0 1-1.04 1.994c-.506.562-1.153 1-1.943 1.312-.79.307-1.693.461-2.71.461Zm8.431-.256v-13.091h2.991v2.182h.137c.238-.756.647-1.338 1.227-1.747a3.376 3.376 0 0 1 2.003-.622c.17 0 .36.008.571.025.216.012.395.031.537.06v2.838a3.202 3.202 0 0 0-.623-.119 5.683 5.683 0 0 0-.809-.06c-.563 0-1.068.122-1.517.366a2.686 2.686 0 0 0-1.049.998c-.255.426-.383.917-.383 1.474V159h-3.085ZM35.011 91.727V115h-4.92V96.398h-.137l-5.329 3.34v-4.363l5.761-3.648h4.625ZM40.543 115v-3.545l8.284-7.671a31.176 31.176 0 0 0 1.772-1.841c.485-.545.853-1.079 1.103-1.602.25-.53.375-1.102.375-1.716 0-.682-.156-1.269-.466-1.761a3.06 3.06 0 0 0-1.273-1.148c-.538-.273-1.148-.41-1.83-.41-.712 0-1.333.145-1.863.433-.53.287-.94.7-1.227 1.238-.288.538-.432 1.178-.432 1.92h-4.67c0-1.522.344-2.844 1.033-3.965.69-1.121 1.656-1.989 2.898-2.603 1.243-.613 2.674-.92 4.296-.92 1.666 0 3.117.295 4.352.886 1.242.584 2.208 1.394 2.898 2.432.689 1.038 1.034 2.227 1.034 3.569a6.85 6.85 0 0 1-.523 2.602c-.34.856-.95 1.807-1.83 2.852-.878 1.038-2.117 2.284-3.715 3.739l-3.398 3.329v.159h9.773V115H40.542Zm29.28.511c-1.954-.007-3.635-.488-5.045-1.443-1.401-.954-2.48-2.337-3.238-4.148-.75-1.81-1.121-3.988-1.114-6.534 0-2.538.375-4.7 1.125-6.488.758-1.788 1.837-3.148 3.239-4.08 1.409-.94 3.087-1.409 5.034-1.409 1.947 0 3.621.47 5.023 1.41 1.409.939 2.492 2.302 3.25 4.09.757 1.78 1.132 3.939 1.125 6.477 0 2.553-.38 4.735-1.137 6.546-.75 1.81-1.825 3.193-3.227 4.148-1.402.954-3.08 1.431-5.034 1.431Zm0-4.079c1.334 0 2.399-.671 3.194-2.012.796-1.34 1.19-3.352 1.182-6.034 0-1.765-.182-3.234-.546-4.409-.356-1.174-.863-2.056-1.522-2.648a3.32 3.32 0 0 0-2.307-.886c-1.326 0-2.386.663-3.182 1.989-.795 1.326-1.197 3.31-1.204 5.954 0 1.788.177 3.281.534 4.478.363 1.189.875 2.083 1.534 2.681.659.591 1.431.887 2.318.887Zm21.51 3.886c-1.698 0-3.209-.291-4.535-.875-1.318-.591-2.36-1.401-3.125-2.432-.757-1.038-1.147-2.234-1.17-3.591h4.954c.03.569.216 1.069.557 1.5.349.425.81.754 1.387.989.575.235 1.223.352 1.943.352.75 0 1.413-.132 1.988-.397.576-.266 1.027-.633 1.353-1.103.325-.469.488-1.011.488-1.625 0-.621-.174-1.17-.522-1.647-.341-.485-.834-.864-1.478-1.137-.636-.272-1.394-.409-2.272-.409h-2.17v-3.613h2.17c.742 0 1.397-.129 1.966-.387.575-.257 1.022-.613 1.34-1.068.319-.462.478-1 .478-1.614 0-.583-.14-1.094-.42-1.534a2.776 2.776 0 0 0-1.16-1.045c-.492-.25-1.068-.375-1.727-.375-.667 0-1.277.121-1.83.364a3.198 3.198 0 0 0-1.33 1.01 2.66 2.66 0 0 0-.533 1.546h-4.716c.023-1.34.405-2.523 1.148-3.545.742-1.023 1.742-1.822 3-2.398 1.265-.583 2.693-.875 4.284-.875 1.606 0 3.01.292 4.216.875 1.204.583 2.14 1.371 2.806 2.364.674.985 1.008 2.09 1 3.318.008 1.303-.397 2.39-1.216 3.261-.81.871-1.867 1.425-3.17 1.659v.182c1.712.22 3.015.815 3.909 1.784.901.962 1.349 2.167 1.341 3.614.008 1.326-.375 2.504-1.148 3.534-.765 1.03-1.822 1.841-3.17 2.432-1.349.591-2.894.886-4.637.886Z"
    />
    <path
      fill="#6BE2BE"
      d="M79.133 51.801V43.16h1.72v8.642h-1.72Zm-3.458-3.464v-1.713h8.642v1.713h-8.642ZM86.72 54v-1.432l4.43-4.59c.473-.498.863-.935 1.17-1.31.31-.379.543-.739.696-1.08.154-.34.23-.703.23-1.087 0-.434-.102-.81-.306-1.125a2.005 2.005 0 0 0-.838-.735 2.663 2.663 0 0 0-1.195-.262c-.469 0-.878.096-1.227.288-.35.192-.618.462-.806.812-.187.35-.281.758-.281 1.227h-1.886c0-.797.184-1.494.55-2.09a3.734 3.734 0 0 1 1.509-1.387c.639-.333 1.365-.499 2.18-.499.822 0 1.546.164 2.173.492.63.324 1.123.767 1.476 1.33a3.46 3.46 0 0 1 .53 1.892c0 .486-.09.96-.274 1.425-.18.465-.492.983-.94 1.554-.447.566-1.07 1.255-1.866 2.064l-2.602 2.723v.096h5.894V54H86.72Zm12.324.121c-.35 0-.65-.123-.901-.37a1.237 1.237 0 0 1-.377-.908c0-.35.125-.648.377-.895a1.23 1.23 0 0 1 .901-.377c.35 0 .65.126.901.377.252.247.377.546.377.895 0 .234-.059.45-.179.646a1.32 1.32 0 0 1-.46.46 1.219 1.219 0 0 1-.639.172Zm7.923.058c-.801 0-1.521-.153-2.161-.46a3.93 3.93 0 0 1-1.521-1.279 3.373 3.373 0 0 1-.607-1.853h1.918c.046.562.296 1.024.747 1.387.452.362.993.543 1.624.543.503 0 .948-.115 1.336-.345.392-.234.699-.556.92-.965.226-.41.339-.876.339-1.4 0-.533-.115-1.008-.345-1.426a2.553 2.553 0 0 0-.952-.984 2.692 2.692 0 0 0-1.381-.364 3.69 3.69 0 0 0-1.195.204c-.401.137-.725.316-.972.537l-1.809-.268.735-6.597h7.198v1.694h-5.555l-.416 3.663h.077c.256-.247.595-.454 1.016-.62.427-.167.883-.25 1.368-.25.797 0 1.507.19 2.129.57.626.378 1.118.896 1.476 1.553.363.651.542 1.401.537 2.25.005.848-.187 1.604-.575 2.269a4.161 4.161 0 0 1-1.598 1.572c-.677.38-1.455.569-2.333.569Zm13.674-2.634v-.69c0-.494.102-.946.307-1.355.209-.413.511-.744.908-.99.4-.252.884-.378 1.451-.378.579 0 1.065.124 1.457.37.392.248.688.578.889.992.204.413.306.867.306 1.361v.69c0 .495-.102.949-.306 1.362-.205.41-.505.74-.902.99-.392.248-.873.372-1.444.372-.576 0-1.061-.124-1.458-.371a2.462 2.462 0 0 1-.901-.991 3.021 3.021 0 0 1-.307-1.361Zm1.49-.69v.69c0 .367.087.7.262.998.174.298.479.447.914.447.43 0 .73-.15.901-.447.17-.299.256-.631.256-.998v-.69c0-.366-.083-.699-.25-.997-.162-.298-.464-.447-.907-.447-.426 0-.729.149-.908.447a1.9 1.9 0 0 0-.268.997Zm-8.074-6.801v-.69c0-.495.103-.948.307-1.362.209-.413.512-.744.908-.99.4-.248.884-.371 1.451-.371.579 0 1.065.123 1.457.37.392.247.688.578.889.991.2.413.3.867.3 1.362v.69c0 .494-.102.948-.307 1.361-.2.41-.498.74-.895.991-.392.247-.873.371-1.444.371-.58 0-1.068-.124-1.464-.37a2.476 2.476 0 0 1-.895-.991 3.035 3.035 0 0 1-.307-1.362Zm1.496-.69v.69c0 .366.085.699.256.997.174.298.479.448.914.448.426 0 .724-.15.895-.448.174-.298.262-.63.262-.997v-.69c0-.367-.083-.7-.249-.997-.167-.299-.469-.448-.908-.448-.426 0-.729.15-.908.448-.175.298-.262.63-.262.997ZM114.665 54l9-13.09h1.527l-9 13.09h-1.527Z"
    />
    <g filter="url(#b)">
      <rect width={42} height={42} x={23} y={26} fill="#252836" rx={8} />
    </g>
    <path
      fill="#FFB572"
      d="M46.986 37C50.048 37 52 38.435 52 41.258V55.33c0 .443-.172.867-.477 1.18-.305.313-.72.489-1.162.489a1.705 1.705 0 0 1-.775-.203l-5.612-3.133-5.59 3.14c-.673.358-1.489.193-2-.407l-.098-.125-.093-.155a1.778 1.778 0 0 1-.193-.786V41.434C36 38.5 37.91 37 41.014 37h5.972Zm0 1.448h-5.972c-2.395 0-3.602.948-3.602 2.986V55.32c0 .044.011.087 0 .07l.037.063c.065.09.186.12.27.075l5.588-3.139c.416-.23.918-.23 1.337.001l5.602 3.128c.043.023.09.035.126.035a.213.213 0 0 0 .153-.065.224.224 0 0 0 .063-.156V41.258c0-1.9-1.238-2.81-3.602-2.81Zm.422 4.869c.39 0 .706.324.706.724 0 .366-.266.669-.61.717l-.096.006H40.54a.715.715 0 0 1-.706-.724c0-.366.266-.669.61-.717l.096-.006h6.868Z"
    />
    <g filter="url(#c)">
      <circle cx={149} cy={47} r={11} fill="#6BE2BE" />
    </g>
    <path
      fill="#1F1D2B"
      d="M148.928 52.179a.483.483 0 0 1-.48-.413l-.004-.065v-8.39l-3.063 3.032a.49.49 0 0 1-.685.001.473.473 0 0 1-.048-.621l.047-.054 3.89-3.85.01-.01.033-.027-.043.037a.576.576 0 0 1 .1-.076.458.458 0 0 1 .226-.064h.033l.036.002-.052-.002a.506.506 0 0 1 .212.047l.025.013a.452.452 0 0 1 .045.029l.007.005a.411.411 0 0 1 .058.05l3.887 3.846a.473.473 0 0 1-.001.675.49.49 0 0 1-.631.045l-.054-.046-3.063-3.031v8.39a.481.481 0 0 1-.485.477Z"
    />
    <defs>
      <filter
        id="a"
        width={246}
        height={192}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.475 0 0 0 0 0.475 0 0 0 0 0.475 0 0 0 0.64 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_447_1291"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_447_1291"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        width={58}
        height={58}
        x={15}
        y={18}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.488188 0 0 0 0 0.733842 0 0 0 0 0.9125 0 0 0 0.49 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_447_1291"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_447_1291"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        width={36}
        height={36}
        x={131}
        y={29}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={3.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.419608 0 0 0 0 0.886275 0 0 0 0 0.745098 0 0 0 0.71 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_447_1291"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_447_1291"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default Tooltip2
