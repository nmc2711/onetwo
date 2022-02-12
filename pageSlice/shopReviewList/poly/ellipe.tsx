function EllipePoly(imageUrl: any) {

  return (
    <svg width="322px" height="322px">

    <defs>
      <pattern id="imgpattern" width="100%" height="100%" viewBox="0 0 322 322" preserveAspectRatio="none">
        <image href={imageUrl.imageUrl} width="322px"/>
      </pattern>
    </defs>

    <g transform="translate(0.000000,322.000000) scale(0.10000,-0.10000)" >
      <path  fill="url(#imgpattern)" d="M537 3210 c-269 -49 -446 -208 -514 -460 -27 -98 -24 -342 5 -474 35
      -158 97 -329 183 -505 l81 -165 -81 -165 c-143 -295 -204 -519 -204 -756 0
      -230 50 -371 178 -501 76 -78 164 -127 285 -160 97 -27 341 -25 476 4 180 39
      417 128 590 223 l74 41 142 -70 c548 -269 1005 -289 1259 -54 117 107 178 237
      199 423 26 233 -48 545 -206 865 l-74 151 79 164 c91 188 139 318 175 481 95
      425 -15 751 -300 889 -109 53 -201 72 -349 72 -241 0 -518 -79 -810 -231
      l-110 -57 -160 80 c-170 85 -352 152 -506 185 -106 23 -335 34 -412 20z"/>
    </g>
  </svg>
  )
}

export default EllipePoly