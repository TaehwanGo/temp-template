export interface CourseData {
  id: string | number;
  hasNext: boolean;
  subjectNames: string[];
  contents: Content[];
}

export type TemplateType =
  | "TP01"
  | "TP02"
  | "TP03"
  | "TP04"
  | "TP05"
  | "TP06"
  | "TP07"
  | "TP08"
  | "TP09"
  | "TP10"
  | "TP11"
  | "TP12"
  | "TP13"
  | "TP14"
  | "TP15"
  | "TP16"
  | "TP17"
  | "TP18"
  | "TP19"
  | "TP20"
  | "TP21"
  | "TP22";

export interface Content {
  id: string | number;
  template: TemplateType;
  isCompleted: boolean;
  components: Component[];
}

/**
 * CH01로 시작하는 공통 컴포넌트는 여기에 포함되지 않고 CourseCommon에 포함됨
 */
export type ComponentType = Component["type"]; // "CH02_02" | "CH02_06";

export type Component = TEST | CH02_06;

export interface TEST {
  type: "TEST";
  data: {
    id: string | number;
    text: string;
  }[];
}

// CH02_01 : 탭 -> 다른 컴포넌트와 조합해서 사용해야 됨

/**
 * 녹음 -> (평가) -> 다시하기
 */
export interface CH02_02 {
  type: "CH02_02";
  data: {
    id: string | number; // 해당 음성을 만약 채점할 경우 사용할 id
  };
}

/**
 * '단어' 버튼 클릭
 * -> 단어, 발음, 뜻, 오디오 버튼 보여주기
 */
export interface CH02_03 {
  type: "CH02_03";
  data: {
    id: string | number;
    contents: {
      id: string | number;
      word: string;
      pronunciation: string;
      meaning: string;
      audioUrl: string;
    }[];
  };
}

/**
 * 오디오 버튼 -> 오디오 재생
 */
export interface CH02_04 {
  type: "CH02_04";
  data: {
    id: string | number;
    buttonType: "A" | "B";
    audioUrl: string;
  };
}

// CH02_05는 정답, 오답 여부를 알려주는 컴포넌트로 채점이 필요한 컴포넌트에서 공통으로 사용 - 공통 컴포넌트로 분리
/**
 * 템플릿을 만들때가 아니라 컴포넌트에서 포함된 데이터에 정답 타입을 어떻게 할 것인지에 따라 결정됨
 */
export interface CH02_05 {
  isCorrect: boolean;
  correctMessage?: string;
  incorrectMessage?: string;
  description?: string;
  audioUrl?: string; // CH02_05_02
}

export interface CH02_06 {
  type: "CH02_06";
  data: {
    id: string | number;
    choices: {
      id: string | number;
      text: string;
    }[];
    correctId: string | number;
  };
}

/**
 * word : 동그란 것에 쌓여서 가로로 배치
 * sentence : 세로로 배치
 */
export interface CH02_07 {
  type: "CH02_07";
  data: {
    id: string | number;
    question?: string;
    choiceType: "word" | "sentence";
    choices: {
      id: string | number;
      text: string;
    }[];
    correctId: string | number;
  };
}

/**
 * Round type  박스
 * 단어, 발음, 성조, 표시
 */
export interface CH02_08 {
  type: "CH02_08";
  data: {
    id: string | number;
    word: string;
    pronunciation?: string;
    meaning?: string;
  };
}

/**
 * 텍스트로 된 설명 내용 제공
: 텍스트 edit (html 형식)를 사용하여 텍스트 스타일을 설정 할 수있음
: 텍스트 사이즈, 굵기, 자간/행간,  컬러 외
: 텍스트 폰트 종류는 브랜드 규격에 따름
 */
export interface CH02_09 {
  type: "CH02_09";
  data: {
    id: string | number;
    html: string; // html 형식의 텍스트 <div><h1>...</h1></div>
  };
}

/**
 * 4성 발음 박스
 */
export interface CH02_10 {
  type: "CH02_10";
  data: {
    id: string | number;
    words: string[];
  };
}

/**
 * 텍스트로 발음과 뜻 표시
 * showHorizontal => true : 가로로 표시(CH02_11_01), false : 세로로 표시(CH02_11_02)
 */
export interface CH02_11 {
  type: "CH02_11";
  data: {
    id: string | number;
    word?: string;
    pronunciation?: string; // CH02_21
    meaning: string;
    comment?: string;
    showHorizontal: boolean; // true : 가로로 표시(CH02_11_01), false : 세로로 표시(CH02_11_02)
  };
}

/**
 * 이미지를 보여주는 컴포넌트
 * CH02_12 : jpg, png, gif
 * CH02_13 : gif로 나와있으나 CH02_12에서 gif도 지원
 */
export interface CH02_12 {
  type: "CH02_12";
  data: {
    id: string | number;
    imageUrl: string;
  };
}

/**
 * 영상을 보여주는 컴포넌트
 * hover : 10초 뒤로, 재생(일시정지), 중지
 */
export interface CH02_14 {
  type: "CH02_14";
  data: {
    id: string | number;
    videoUrl: string;
    thumbnailUrl?: string;
  };
}

/**
 * 테이블 스타일 설정 가능
 * 테이블 전체 크기 설정
 * 열, 행 개수 설정
 * 테이블 별 크기, 정렬 설정
 * 보더 스타일, 크기 설정
 * 테이블 내에 콤포넌트 삽입 가능
 * - 구현 어려울 것 같다
 * - 사실상 자유양식의 템플릿이기 때문
 */
export interface CH02_15 {
  type: "CH02_15";
  data: {
    id: string | number;
    table: {
      rows: number; // 행 개수
      cols: number; // 열 개수
      width: string; // 테이블 전체 가로 크기
      height: string; // 테이블 전체 세로 크기
      cellSize: {
        widthSizes: string[]; // 각 열의 가로 크기
        heightSizes: string[]; // 각 행의 세로 크기
      };
      border: {
        width: number;
        style: "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge";
      };
      cells: {
        id: string | number;
        alignHorizontal: "left" | "center" | "right";
        alignVertical: "top" | "middle" | "bottom";
        component: Component;
      }[];
    };
  };
}

/**
 * Conversation
 */
interface Conversation {
  id: string | number;
  iconUrl: string;
  word: string;
  pronunciation?: string;
  meaning?: string;
  audioUrl: string;
}

interface BlankWordData {
  words: (string | "*blank*")[]; // *blank* : 빈칸
  choices: string[]; // 선택지
  correctChoice: string; // 정답
}

/**
 * CH02_27
 */
interface ConversationBlank extends Omit<Conversation, "word"> {
  blankWordData: BlankWordData;
}

/**
 * 아이콘 이미지와 대화 박스로 구성
 * - 단어, 발음, 뜻 제공
 * - 단어 음원 재생됨
 */
export interface CH02_16 {
  type: "CH02_16";
  data: {
    id: string | number;
    conversations: Conversation[];
  };
}

/**
 * 대화 박스를 순서대로 재생
 * - 단어, 발음, 뜻, 음원 제공
 * - CH02_16과 차이 : 전체 순차 재생 기능 유무
 * - 해석 버튼 클릭 시 해석 표시
 * - 포함하는 컴포넌트 : CH02_16, CH02_18, CH02_19, CH02_38, CH02_39, CH02_57, CH02_58
 */
export interface CH02_17 {
  type: "CH02_17";
  data: {
    id: string | number;
    disablePronunciation?: boolean; // default: false, true => CH02_18
    disableMeaning?: boolean; // default: false, true => CH02_19
    conversations: Conversation | ConversationBlank[];
  };
}

// CH02_18, CH02_19 : CH02_17과 동일

/**
 * 강조 아이콘과 텍스트로 된 지시문
 */
export interface CH02_20_01 {
  type: "CH02_20_01";
  data: {
    id: string | number;
    iconUrl?: string;
    text: string;
  };
}

/**
 * 음원과 텍스트 지시문으로 구성
 */
export interface CH02_20_02 {
  type: "CH02_20_02";
  data: {
    id: string | number;
    audioUrl: string;
    text: string;
  };
}

// CH02_21 : CH02_11과 동일

/**
 * 숫자, 발음, 뜻과 단어 음원으로 구성된 숫자 학습 콤포넌트
 * - 숫자 뿐만 아니라 다른 텍스트도 가능
 */
export interface CH02_22 {
  type: "CH02_22";
  data: {
    id: string | number;
    word: string;
    pronunciation: string;
    meaning: string;
    audioUrl: string;
  };
}

/**
 * 숫자와 숫자를 설명하는 텍스트로된 해설을 제공하는 박스 형태 콤포넌트
 */
export interface CH02_23 {
  type: "CH02_23";
  data: {
    id: string | number;
    word: string; // 숫자
    pronunciation?: string; // 발음
    description: string; // 숫자 설명
  };
}

/**
 * 성조를 표시하고 설명하는 텍스트로 이루어진 개별 박스 콤포넌트
 */
export interface CH02_24 {
  type: "CH02_24";
  data: {
    id: string | number;
    word: string; // 성조
    description: string; // 성조 설명
  };
}

/**
 * 올바른 글자, 단어나 발음을 드레그 앤 드롭을 통해 맞추는 퀴즈 콤포넌트
 */
export interface CH02_25 {
  type: "CH02_25";
  data: {
    id: string | number;
    correctId: string | number; // 올바른 단어, 발음의 id
    words: {
      id: string | number;
      word: string;
    }[];
  };
}

// CH02_26 : 코너 시작 또는 학습 활동 시작 전 간단히 소개하는 영상을 제공하는 레이어 팝업(모달)
export interface CH02_26 {
  type: "CH02_26";
  data: {
    id: string | number;
    videoUrl: string;
  };
}

/**
 * 지난 레슨에서 배운 단어, 문장을 퀴즈로 복습하는 콤포넌트
 */
export interface CH02_27 {
  type: "CH02_27";
  data: ConversationBlank;
}

/**
 * 글자 또는 단어를 드레그&드롭하여 학습하는 콤포넌트
 */
export interface CH02_28 {
  type: "CH02_28";
  data: {
    id: string | number;
    correctId: string | number; // 올바른 단어, 발음의 id
    meaning: string;
    audioUrl: string; // 빈칸을 클릭하면 정답에 대한 음원이 재생
    words: {
      id: string | number;
      word: string;
    }[];
  };
}

/**
 * 글자, 또는 단어 설명
 * 음원 제공, 뜻 또는 발음에 대한 설명 텍스트 제공
 */
export interface CH02_29 {
  type: "CH02_29";
  data: {
    id: string | number;
    word: string;
    pronunciation?: string; // CH02_37
    meaning: string;
    audioUrl: string;
  };
}

/**
 * 글자, 단어와 문장을 학습하는 콤포넌트
 * 글 또는 단어 단위로 구별되어 있으며 음원 제공
 * - 음원은 단어단위가 아닌 하나의 음원으로 제공
 */
export interface CH02_30 {
  type: "CH02_30";
  data: {
    id: string | number;
    audioUrl: string;
    meaning: string;
    wordsData: {
      id: string | number;
      word: string;
      pronunciation?: string;
      isBold?: boolean;
      color?: string; // 기본값은 검정
    }[];
  };
}

/**
 * 이미지 탭시 음원을 제공하는 콤포넌트
 * 이미지에 대한 설명을 같이 제공하는 콤포넌트
 */
export interface CH02_31 {
  type: "CH02_31";
  data: {
    id: string | number;
    imageUrl: string;
    audioUrl: string;
    description?: string; // CH02_34
    sentence?: string;
    importantWord?: string; // sentence에서 중요 단어 강조
    pronunciation?: string;
    importantPronunciation?: string; // pronunciation에서 중요 단어 강조
  };
}

/**
 * 글자, 단어와 문장을 학습하는 콤포넌트
 * 글 또는 단어 단위로 구별되어 있으며 음원 제공
 * -> CH02_40_01에서 사용
 */
export interface CH02_32 {
  type: "CH02_32";
  data: {
    id: string | number;
    word: string; // 문장이 올 수도 있음
    importantWord?: string; // 중요 단어 강조(색, 두께) - CH02_40_01
    pronunciation: string;
    importantPronunciation?: string; // 중요 발음
    meaning: string;
    audioUrl: string;
  };
}

/**
 * 글자 또는 단어를 조합하여 문장을 만들어 학습하는 콤포넌트
 */
export interface CH02_33 {
  type: "CH02_33";
  data: {
    id: string | number;
    wordList: {
      id: string | number;
      word: string;
      isBlank: boolean;
    }[];
    choiceWords: {
      id: string | number;
      word: string;
    }[];
  };
}

/**
 * 음원을 제공하는 답 선택 콤포넌트
 */
export interface CH02_35 {
  type: "CH02_35";
  data: {
    id: string | number;
    choices: {
      id: string | number;
      text: string;
      audioUrl: string;
      isAnswer: boolean;
    }[];
  };
}

/**
 * 글자 또는 단어를 드레그하&드롭하여 학습하는 콤포넌트
 * - CH02_28과 유사지만 위에 단어가 표시되고 발음을 선택한다는 점이 다름
 */
export interface CH02_36 {
  type: "CH02_36";
  data: {
    id: string | number;
    word: string;
    correctId: string | number; // 올바른 단어, 발음의 id
    meaning: string;
    audioUrl: string; // 클릭하면 정답에 대한 음원이 재생
    pronunciations: {
      id: string | number;
      pronunciation: string;
    }[];
  };
}

// CH02_38, CH02_39 : CH02_17과 동일 - 왼쪽으로 통일하기로 함

/**
 * 하단 서랍, 탭 콤포넌트
 * 부가적인 설명 또는 활동이 옵션으로 제공될 경우 사용
 * - 이것도 구현 시 고민해봐야 됨
 * - Organism 또는 Template 급
 */
export interface CH02_40 {
  type: "CH02_40";
  data: {
    id: string | number;
    tabList: {
      id: string | number;
      tabName: string;
      tabContent: Component;
    }[];
  };
}

/**
 * 회화 순서대로 문장을 구성하며 학습하는 콤포넌트
 * 기획서에서 아래쪽에 단어를 순서대로 선택하는 부분
 */
export interface CH02_41_QUESTION {
  type: "CH02_41_QUESTION";
  data: {
    id: string | number;
    question: string;
    wordList: {
      id: string | number;
      word: string;
      pronunciation: string;
    }[];
    correctIdOrder: string | number[]; // 올바른 순서의 단어 id
  };
}

/**
 * 회화 순서대로 문장을 구성하며 학습하는 콤포넌트
 */
export interface CH02_41 {
  type: "CH02_41";
  data: {
    id: string | number;
    conversationAndQuestionList: {
      id: string | number;
      conversations: {
        id: string | number;
        iconUrl?: string;
        sentence?: string; // 중국어 회화
        pronunciation?: string; // 발음
        meaning?: string; // 한국어 뜻
        audioUrl: string;
      }[];
      question: CH02_41_QUESTION;
    }[];
  };
}

/**
 * 회화 문장에 맞는 한자어를 탭하여 학습하는 콤포넌트
 * CH02_58 => CH02_17에서 구현
 */

/**
 * 회화 순서대로 문장을 구성하며 학습하는 콤포넌트
 */
export interface CH02_42 {
  type: "CH02_42";
  data: {
    id: string | number;
    questions: {
      id: string | number;
      question: string; // 중국어 문장
    }[];
    choices: {
      id: string | number;
      meaning: string; // 한국어 뜻
      questionId: string | number; // 문장 id
    }[];
  };
}

/**
 * 문장, 발음, 뜻과 음원으로 구성된 예문 타입
 * e.g. 긍정문, 부정문
 */
export interface CH02_40_01 {
  type: "CH02_40_01";
  data: {
    id: string | number;
    cards: {
      id: string | number;
      title: string;
      content: CH02_32;
    }[];
  };
}

/**
 * CH02_31 사용
 */
export interface CH02_40_02 {
  type: "CH02_40_02";
  data: {
    id: string | number;
    cards: {
      id: string | number;
      title: string;
      contents: CH02_31[];
    }[];
  };
}

// CH02_40_03 => CH02_30 사용

/**
 * 문장 확인(체크) 박스 컴포넌트
 */
interface CH02_43_BOX {
  id: string | number;
  sentence: string;
  pronunciation: string;
}

/**
 * 메타인지 테스트에서 사용할 각 문장에 대한 체크 박스 컴포넌트 모음
 */
export interface CH02_43 {
  type: "CH02_43";
  data: {
    id: string | number;
    boxes: CH02_43_BOX[];
  };
}

/**
 * 메타인지 테스트
 */
export interface CH02_44 {
  type: "CH02_44";
  data: {
    id: string | number;
    tests: {
      id: string | number;
      question: string;
      sentence: string;
      answerId: string | number; // 올바른 choice id
      choices: {
        id: string | number;
        text: string; // 선택지
      }[];
    }[];
  };
}

/**
 * CH02_45
 * 로딩 스피너
 * 사용자한테 제공되지 않음, 결정되면 내부적으로 사용
 */

/**
 * CH02_46
 * 메타인지 결과를 나타내는 컴포넌트
 * 사용자에게 제공되지 않음
 */

/**
 * 메타인지 테스트 중 아는 문장 선택
 * - 복수 선택 가능
 * - 한자어가 길 경우 두줄까지 제공
 */
export interface CH02_47 {
  type: "CH02_47";
  data: {
    id: string | number;
    sentences: {
      id: string | number;
      sentence: string;
    }[];
  };
}

// TODO : CH02_48 부터 이어서
// - 차이홍 초록+파랑 PPT 69페이지부터
