export interface AsignatureStructure {
    asignatures: Asignature[]
  }
  
  export interface Asignature {
    math: Math[]
    english: English[]
  }
  
  export interface Math {
    name: string
    img?: string
    location: string
    bimg?: string
  }
  
  export interface English {
    name: string
    img?: string
    location: string
    bimg?: string
  }
  