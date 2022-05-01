import { Select } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import allActions from '../../actions';
import { Row, Col } from 'antd';
const { Option } = Select;

function SelectOneForm({ onChangeExerciseId, onChangeVocabularyTopicId, onChangeGrammarId }) {
    const dispatch = useDispatch();
    const grammarList = useSelector(state => state.grammarsReducer);
    const vocaTopicList = useSelector(state => state.vocabularyTopics);
    const exerciseList = useSelector(state => state.exerciseReducer)
    var grammarDtos = grammarList.map(x => {
        return {
            "id": x.id,
            "title": x.name,
            "type": 1
        };
    })
    var vocaDtos = vocaTopicList.map(x => {
        return {
            "id": x.id,
            "title":x.name,
            "type": 2
        }
    })

    var exerciseDtos = exerciseList.map(x => {
        return {
            "id": x.id,
            "title":x.name,
            "type": 3
        }
    })


    useEffect(() => {
        dispatch(allActions.grammarAction.actFetchGrammarRequest());
        dispatch(allActions.vocabularyTopicAction.actFetchVocaTopicsRequest())
        dispatch(allActions.adminExerciseAction.actFetchAllExerciseRequest())
    }, [])

    function handleChangeGrammarId(value) {
        if (value) {
            const obj = JSON.parse(value)
            onChangeGrammarId(obj['id'])
        } else {
            onChangeGrammarId(-1)
        }
    }

    function handleChangeExerciseId(value) {
        if (value) {
            const obj = JSON.parse(value)
            onChangeExerciseId(obj['id'])
        } else {
            onChangeExerciseId(-1)
        }
    }

    function handleChangeVocabularyTopicId(value) {
        if (value) {
            const obj = JSON.parse(value)
            onChangeVocabularyTopicId(obj['id'])
        } else {
            onChangeVocabularyTopicId(-1)
        }
    }

    return (
        <>
            <Row>
                <Col span={8}>
                    <label>Lý thuyết</label>
                    <Select
                        allowClear
                        onChange={handleChangeGrammarId}
                        showSearch
                        style={{ width: 220 }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        
                        {grammarDtos.map(x => <Option key={JSON.stringify(x)}>{x.title}</Option>)}
                    </Select>
                </Col>
                <Col span={8}>
                    <label>Từ vựng</label>
                    <Select
                        allowClear
                        onChange={handleChangeExerciseId}
                        showSearch
                        style={{ width: 220 }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        {vocaDtos.map(x => <Option key={JSON.stringify(x)}>{x.title}</Option>)}
                    </Select>
                </Col>
                <Col span={8}>
                    <label>Bài tập</label>
                    <Select
                        defaultValue={undefined}
                        allowClear
                        onChange={handleChangeVocabularyTopicId}
                        showSearch
                        style={{ width: 220 }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        {exerciseDtos.map(x => <Option key={JSON.stringify(x)}>{x.title}</Option>)}
                    </Select>
                </Col>
            </Row>

        </>
    );
}
export default SelectOneForm;