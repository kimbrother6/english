import 'static/word/create_training_set.css'
import { useState } from 'react';
import { trainingSetRequest } from 'server'
import { TermRows } from 'components'


function CreateTrainingSetJsx() {
    const [termRowsNum, setTermRowsNum] = useState(5);

    return  <div id="SetPageTarget">
    <div class="CreateSetPage">
    <div class="CreateSetHeader has-adz">
        <div class="CreateSetHeader-stickyPlaceholder">
            <div class="CreateSetHeader-sticky">
                <div class="UIContainer">
                    <div class="CreateSetHeader-heading">
                        <div class="CreateSetHeader-headingText">
                            <div class="CreateSetHeader-title">
                                <span>학습 세트 만들기</span>
                                </div>
                            </div>
                            <div class="CreateSetHeader-adz">
                                <div class="CreateSetHeader-adzContainer">
                                    <div class="CreateSetHeader-adzWrapper"></div>
                                </div>
                            </div>
                            <div class="CreateSetHeader-infoButtonWrap">
                                <button class="UIButton" type="button" onClick={() => trainingSetRequest(termRowsNum)} >
                                    <span class="UIButton-wrapper"><span>만들기</span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="UIContainer">
            <div class="CreateSetHeader-headingContent">
                <div class="CreateSetHeader-textarea CreateSetHeader-title">
                    <div class="SpecialCharacterTextarea">
                        <label class="UITextarea">
                            <div class="UITextarea-content">
                                <div class="AutoExpandTextarea UITextarea-textarea UITextarea-autoExpandTextarea" style={{'height': '30px'}}>
                                    <div class="AutoExpandTextarea-sizer"></div>
                                    <div class="AutoExpandTextarea-wrapper">
                                        <textarea maxlength="255" placeholder="제목을 입력하세요, 예: 생물학 - 22장: 진화" class="AutoExpandTextarea-textarea" id="trainingSetTitle"></textarea>
                                    </div>
                                </div>
                                <span class="UITextarea-border"></span>
                            </div>
                            <span class="UITextarea-label">
                                <span>제목</span>
                            </span>
                        </label>
                        <span></span>
                    </div>
                </div>
                    <div class="CreateSetHeader-textarea CreateSetHeader-description">
                        <div class="SpecialCharacterTextarea">
                            <label class="UITextarea">
                                <div class="UITextarea-content">
                                    <div class="AutoExpandTextarea UITextarea-textarea UITextarea-autoExpandTextarea"  style={{'height': '30px'}}>
                                        <div class="AutoExpandTextarea-sizer"></div>
                                        <div class="AutoExpandTextarea-wrapper">
                                        <textarea placeholder="설명을 추가하세요..." tabindex="6" variant="default" class="AutoExpandTextarea-textarea" id="trainingSetExplanation"></textarea>
                                    </div>
                                </div>
                                <span class="UITextarea-border"></span>
                            </div>
                            <span class="UITextarea-label"><span>설명</span></span>
                            </label>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
                <div class="UIContainer">
                    <div class="UIDiv CreateSetHeader-permissionsAndImport">
                        <button class="UILink" type="button">
                            <span>+ Word, Excel, Google Docs 등 데이터 불러오기 기능</span>
                        </button>
                        <div class="CreateSetHeader-permissionsWrap">
                            <div class="CreateSetHeader-permissionWrap">
                                <div class="CreateSetHeader-permissionsLink">전체 공개</div>
                                    <button class="UILink" tabindex="0" type="button">
                                        <span>변경</span>
                                    </button>
                                </div>
                                <div class="CreateSetHeader-permissionWrap">
                                    <div class="CreateSetHeader-permissionsLink">수정 권한: 나만</div>
                                        <button class="UILink" tabindex="0" type="button">
                                            <span>변경</span>
                                        </button>
                                    </div>
                                    <div class="CreateSetHeader-permissionWrap">
                                        <span class="MenuIconWithTooltip is-Popover is-Tooltip UIOverlayTrigger-target">
                                            <span class="UIIconButton">
                                                <button class="UIButton" disabled="" title="단어와 뜻의 위치 바꾸기" type="button">
                                                    <span class="UIButton-wrapper">
                                                        <svg aria-label="switch" class="UIIcon UIIcon--switch" role="img"><noscript></noscript><use xlinkHref="#switch"></use><noscript></noscript></svg>
                                                    </span>
                                                </button>
                                            </span>
                                        </span>
                                        <span class="MenuIconWithTooltip is-bottomright is-Popover is-Tooltip UIOverlayTrigger-target">
                                            <span class="UIIconButton">
                                                <button class="UIButton" title="단축키" type="button">
                                                    <span class="UIButton-wrapper">
                                                        <svg aria-label="keyboard" class="UIIcon UIIcon--keyboard" role="img"><noscript></noscript><use xlinkHref="#keyboard"></use><noscript></noscript></svg>
                                                    </span>
                                                </button>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="UIContainer">
                        <span></span>
                    </div>
                </div>

        <div class="CreateSetPage-container">
            <div class="CreateSetDiagramUploader">
                <div class="UIFloatedCardBackdrop">
                    <div class="UIFloatedCardBackdrop-content">
                        <div class="UIContainer">
                            <div class="UIFloatedCard UIFloatedCard--white">
                                <div class="UIFileChooser">
                                    <form class="UIFileChooser-form">
                                        <input accept="image/bmp,image/jpeg,image/png" aria-label="업로드할 파일을 선택하세요" capture="environment" class="UIFileChooser-input js-keymaster-allow" name="UIFileChooser2" type="file"/>
                                    </form>
                                    <div class="UIFileChooser-contents">
                                        <div class="CreateSetDiagramUploader-banner">
                                            <div class="CreateSetDiagramUploader-bannerInfoIcon CreateSetDiagramUploader-bannerInfoIcon--inverted">
                                                <span class="UIIconButton">
                                                    <button class="UIButton UIButton--white" type="button">
                                                        <span class="UIButton-wrapper">
                                                            <svg aria-label="info" class="UIIcon UIIcon--info-inverse" role="img"><noscript></noscript><use xlinkHref="#info-inverse"></use><noscript></noscript></svg>
                                                        </span>
                                                    </button>
                                                </span>
                                            </div>
                                            <div class="CreateSetDiagramUploader-bannerImage"></div>
                                            <div class="CreateSetDiagramUploader-bannerText">
                                                <h4 class="UIHeading UIHeading--four"><span>다이어그램 추가 및 라벨 붙이기</span></h4>
                                                <p class="UIParagraph">
                                                    <span>이미지를 드래그하거나
                                                        <a class="UILink" data-testid="UILink-anchor" href="#"><span>선택하세요</span></a>.
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="UIFloatedCardBackdrop-bottom" style={{'height': '50%'}}></div>
                </div>
            </div>
            <div class="UIContainer">
                <div class="CreateSetPage-list">
                    <div class="StudiableItems">
                        <div class="e1phsipe" id="editor-term-side">단어</div>
                        <div class="e1phsipe" id="editor-definition-side">뜻</div>
                        <div class="e1phsipe" id="editor-question-side">문제</div>
                        <div class="e1phsipe" id="editor-answer-side">답</div>
                        <div class="e1phsipe" id="editor-custom-distractor">객관식 문제 옵션</div>
                        <div class="TermRows">
                            <TermRows termRowsNum={termRowsNum} setTermRowsNum={setTermRowsNum}/>
                        <div>

            </div>
    <div class="VoiceRecordingPermissionsModal">
        <div class="VoiceRecordingPermissionsModal-content">
                    <p>
            <span>음성 녹음 기능을 사용하시려면 컴퓨터의 마이크 이용 권한을 허가해 주세요.</span>
            </p>
        </div>
    </div>
        </div>
        </div>
        <div class="CreateSetPage-footer">
            <div class="CreateSetPage-publishButton">
                <button class="UIButton UIButton--hero" type="button" onClick={() => trainingSetRequest(termRowsNum)}>
                    <span class="UIButton-wrapper"><span>만들기</span></span>
                </button>
            </div>
        </div>
    </div>
</div>
</div>
<div class="ImportTerms is-hidden">
<div class="ImportTerms-import">
    <div class="UIContainer">
        <div class="ImportTerms-cancelImportButtonWrap">
            <button aria-label="취소" class="UILinkButton" type="button"><span>취소</span></button>
        </div><span class="ImportTerms-heading"><span>데이터 불러오기</span></span> <span class="ImportTerms-instructions"><span>데이터를 복사하여 붙여넣으세요. (Microsoft Word, Excel, Google Docs, 기타)</span></span>
            <form class="ImportTerms-form"><textarea class="ImportTerms-textarea" placeholder="단어 1	뜻 1
단어 2	뜻 2
단어 3	뜻 3"></textarea><div class="ImportTerms-importButtonWrap"><button aria-label="불러오기" class="UIButton UIButton--hero" disabled="" type="button"><span class="UIButton-wrapper">
    <span>불러오기</span>
</span></button></div><div class="ImportTerms-formGroupWrap"><div class="ImportTerms-formGroup"><label class="ImportTerms-formLabel"><span>단어 / 뜻 구분자</span>
            </label><div class="UIDiv UIRadioGroup"><label class="UIRadio" for="ui-control-534818a8-053c-4179-b28a-bed13b90cb5e">
                <input class="UIRadio-input" id="ui-control-534818a8-053c-4179-b28a-bed13b90cb5e" type="radio" defaultValue="Delimiter.TAB" checked=""/>
                <span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span>↹</span></span></label>
                <label class="UIRadio" for="ui-control-0a4af28c-05eb-4bdf-937f-b8d5eb74939f">
                <input class="UIRadio-input" id="ui-control-0a4af28c-05eb-4bdf-937f-b8d5eb74939f" type="radio" defaultValue="Delimiter.COMMA"/><span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span>반점(,)</span>
            </span></label>
            <label class="UIRadio" for="ui-control-78059866-ee92-47c9-ba72-7c4fe757000d"><input class="UIRadio-input" id="ui-control-78059866-ee92-47c9-ba72-7c4fe757000d" type="radio" value="Delimiter.CUSTOM"/>
                <span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span class="ImportTerms-formCustomDelimiter"><label class="UIInput"><div class="UIInput-content">
                    <input placeholder="-" class="UIInput-input" type="text" defaultValue=""/><span class="UIInput-border"></span></div><span class="UIInput-label"><span>사용자 지정</span></span></label>
                </span></span></label></div></div><div class="ImportTerms-formGroup"><label class="ImportTerms-formLabel"><span>카드 구분</span></label><div class="UIDiv UIRadioGroup">
                <label class="UIRadio" for="ui-control-f5e817a6-c01e-4193-97c1-99ef6162b5fa"><input class="UIRadio-input" id="ui-control-f5e817a6-c01e-4193-97c1-99ef6162b5fa" type="radio" value="Delimiter.NEWLINE" checked=""/>
                    <span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span>다음 줄</span></span></label><label class="UIRadio" for="ui-control-cf2fdb1a-e33a-4b0d-b2a5-0bf5f4835d26">
                <input class="UIRadio-input" id="ui-control-cf2fdb1a-e33a-4b0d-b2a5-0bf5f4835d26" type="radio" defaultValue="Delimiter.SEMICOLON"/><span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span>쌍반점 (;)</span></span>
            </label><label class="UIRadio" for="ui-control-d9f7970a-b229-4653-b6b2-ca9afb9639e9"><input class="UIRadio-input" id="ui-control-d9f7970a-b229-4653-b6b2-ca9afb9639e9" type="radio" value="Delimiter.CUSTOM"/>
                <span class="UIRadio-fauxInput"></span><span class="UIRadio-label"><span class="ImportTerms-formCustomDelimiter"><label class="UIInput"><div class="UIInput-content">
                    <input placeholder="\n\n" class="UIInput-input" type="text" defaultValue=""/><span class="UIInput-border"></span></div><span class="UIInput-label"><span>사용자 지정</span></span></label></span></span></label></div></div>
            </div>
            </form>
        </div>
        </div>
        <div>

        </div>
        <div class="ImportTerms-preview"><div>

        </div>
            <div class="UIContainer">
                <h4 class="UIHeading UIHeading--four"><span>미리보기</span></h4>
                <div class="ImportTerms-previewRows"><p>미리보기가 없습니다.</p>
    </div>
    </div>
    </div>
    </div>
        <div class="SetPermissions"></div>
    </div>
</div>
}

export default CreateTrainingSetJsx