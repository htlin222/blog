---
template: post
title: "ChatGPT in Clinical Practice"
date: "2024-01-12"
slug: "chatgpt-in-clinical-Practice"
enableToc: true
draft: false
category: tutorial
---

#### 2024-01-17 Appen Symposium

<hr>

# ChatGPT in Clinical Practice

---

## Disclaimer

- Please note that the information provided may not be entirely error-free or up-to-date.
- We recommend independently verifying the content and consulting with professionals for specific advice or information.
- We do not assume any responsibility or liability for the use or interpretation of this content.

## Disclosure

NIL

---

## Outline

1. What is LLM and ChatGPT
2. Prompt Engineering
3. Clinical Scenarios
4. ChatGPT in Clincial Research
5. chatGPT API usage

---

<!-- _footer: '' -->

## What is ChatGPT?

- Generative Pre-trained Transformer
  - 生成式👉預先-訓練👉轉換器
- 一系列使用轉換程式架構的神經網路模型

---

## ChatGPT 是一個文字接龍高手

- 🦎 是一種
  - `① 爬 70%` `② 生 50%` `③ 動 30%`
- 🦎 是一種**爬**
  - `① 蟲 90%` `② 行 30%` `③ 來 10%`
- 🦎 是一種**爬蟲**
  - `① 類 90%` `② 生 30%` `③ 動 50%`

![Figure: height:200px](https://i.imgur.com/yEbAn7A.png)

---

<!-- _footer: '' -->

## Why Does It Work?

![Figure: width:450px](https://i.imgur.com/xtWGR3j.png)

![Figure: width:450px](https://i.imgur.com/1GJAr9J.png)

> [What Is ChatGPT Doing … and Why Does It Work?-Stephen Wolfram Writings](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/)

---

## List of LLMs

- [ChatGPT](https://chat.openai.com/) by `OpenAI`
- [Claude](https://claude.ai/chats)
- [Bard](https://bard.google.com/chat) by `Google`
- [Bing](https://www.bing.com/new) by `MS`
- [vercel AI Playground](https://sdk.vercel.ai/)

---

# Clinical Scenarios

- [本份投影片及素材連結](https://hackmd.io/@htlin222/appen_chatgpt)

## bit.ly/appen_chatgpt

---

## Scenario: Translate Chinese to English

##### 初診護理紀錄

65 歲女性，主訴 2021/11 月開始腰酸背痛，至診所就醫，醫生告知腰椎壓迫，建議復健，

但未改善，至中國醫藥學院神經外科就醫，MRI：胸椎 11 節骨折 （報告未帶） ，2021/12/16 灌骨水泥，但腰酸背痛皆未改善，並發現右胸突一塊且越長越大，

2/18 右胸切片：多發性骨髓瘤 （報告未帶） ，今想轉至本院後續治療。

---

### The Prompt

✨Goal: Translate text to English

- as medical "narrative" record
- date format: YYYY-MM-DD
- include all information provided in the text, do not omit anything
- do not makeup not exist information

''''''
{YOUR_TEXT_HERE}

⭐

---

## Scenario: Convert phrases to narrative

##### PM: 23:59, a new patient from ER

55F p/w Fever chills 3pm~. no sorethroat, rhinorrhea, oral ulcer, cough, chest pain, abdomen pain, dysuria or diarrhea. No headache or myalgia. TOCC negative . Mild DOE since C/T.

In UCU, 38.5; no shock, room air, neutropenia, high CRP level. CXR nl. Confirm with Dr.陳，gave cftz, G-CSF, admitted for infection ctrl. pend COVID and Influenza Ag

---

### The Prompt

Goal: convert the information into medical "narrative" record in paragraph

- date format: YYYY-MM-DD, e.g. 2023-10-09
- include all information provided in the text, don't omit anything
- do makeup not exist information

''''''
{text here}

⭐

---

## Scenario: Convert narrative to bullet points

A 65-year-old female presented with complaints of lower back pain and stiffness that started in November 2021. She sought medical attention at a clinic, where the doctor diagnosed lumbar spine compression and recommended rehabilitation. However, her symptoms did not improve with the prescribed treatment. Subsequently, she visited the Neurosurgery Department at the Chinese Medical University, where an MRI revealed a fracture in the 11th thoracic vertebra (report not available). On 2021-12-16, she underwent vertebroplasty (bone cement injection) to address the fracture, but her lower back pain and stiffness persisted.

---

Additionally, during the course of evaluation, a lump was noticed in the right chest area, which has been progressively increasing in size. A biopsy of the right chest lump was performed on 2023-02-18, and the results revealed multiple myeloma (report not available). The patient is now seeking further treatment and care at our hospital.

---

### Prompt

Goal: convert the narrative paragraph as bullet points

- order each event chronologically
- for each points/event, format as "- YYYY-MM-DD: event"

''''''
{text here}

⭐⭐

---

## Scenario: Summarize the Note

This 60 y/o postmenopause woman, G1P1, has history of HTN, dyslipidemia, and osteoporosis for years with regular medical control. She has regular health check up and was found to have breast fibrocystic change and proliferative disease at our hospital since 2013. For left breast lesion, she also received thrice FNA of left breast lesion with normal finding in the past. On 2023/07/10 breast sono, there was disclosed BI-RAD:4, a L't 5-mm irregular hypoechoic lesion in 1/2cm, not demonstrated on previous sonogram on 2022/01/18.

---

On 2023/08/07 FNA to left 1/2 breast lesion showed suspicious for low grade carcinoma. Core biopsy of left 1/2 breast lesion confirmed INVASIVE LOBULAR CARCINOMA. Systemic work up was arranged and reported left breast 1/2 lobular cancer with cT1N0M0, ER: 8, PR: 5, HER2: +/+++. Treatment option was discussed. Under agreement, she was admitted for operation with left breast wide excision plus SLNB.

---

### Prompt

Goal: as oncologist, summarize the information by following rules

- markdown title h2 each points
- patient info (age, gender, past history)
- cancer type(anatomical, histologic),
- cancer grade(high, intermediate, or low),
- cancer stage: International Cancer Control (AJCC/UICC) tumor-node-metastasis (TNM) classification system

(continued)

---

(continued)

- genetic mutations (if provided)
- disease course; first points should always be "Initial presentation"
- for each course or event, start with time information should always at the begin of line, such as:
- "- (YYYY-MM-DD): event, treatment"
- grouping the event
- reason for hospitalization, in bullet points

⭐⭐

---

## Scenarios: Scan the record and reorganize

![素材在這👉藥單 width:500px](https://i.imgur.com/GSyKCBT.jpg)

---

### Use iPhone to Capture the Text

醫令代碼 開始日期 停止日期 藥品名稱 劑量 總量

ICYCLO5 0970731 0970731 Cyclophosphamide （針劑） 500mg/Vial
795
mg (1.59 VI )STAT
IFLUORO10970731 0970731 FluoroUracil 500mg/10ml/VI
795 mg (1.59 VI )STAT
IPHARMO 0970731 0970731 Epirubicin 10mg/VI
159 mg (15.9 VI )STAT
ICYCLO5 0970821
0970821 Cyclophosphamide （針劑） 500mg/Vial 795
mg (1.59 VI )STAT
IFLUORO10970821
0970821 FluoroUracil 500mg/10ml/VI
795

... （以下省略 500 字）

---

### Prompt

Goal: create a markdown table

- organize as a markdown tabe,
- identify headings: 醫令代碼 開始日期 停止日期 藥品名稱 劑量 總量
- omit the column "醫令代碼"
- modify date format, add 1911 to first three digits, and convert to the YYYY-MM-DD
  e.g. 0980701 will become be 20090701 then format as 2009-07-01

'''
{text here}
'''

⭐⭐⭐

---

## Scenarios: Read a pathology report

Left breast, wide excision with sentinel lymph node biopsy

- Tumor histology: INVASIVE DUCTAL CARCINOMA
- Nottingham grade: 2
- Number and size of invasive carcinoma(s): one tumor, 1.1x0.9x0.7 cm/ 11x9x7 mm
- Estrogen receptor: positive, Allred score=8
- Progesterone receptor: positive, Allred score=8
- HER2 (IHC): non-overexpressed, score=1+
- Ki-67: 23%

---

[Full report here](https://shorturl.at/zIX49)

`https://shorturl.at/zIX49`

---

### Prompt

Goal: read the pathology report ,
fill up the { }

- if there's not provided, return N/A

Tumor histology: {e.g. Ductal carcinoma},

- pT{ }N{ }, size:{ }, NG{ },
- ER{ }/PR{ }/HER2{ }, Ki-67: { }%, LIV: { }

'''
{report here}
'''

⭐⭐⭐

---

### Prompt, modified

Goal: read the pathology report, return the ER/PR/HER2 status

- for ER/PR, if positive, then return 1 else 0
- for HER2, if more or equal than 3+, which means positive, then return 1, else 0
- if there's not provided, or you are not sure from the text, return NIL
- the result will be three digits sperate by comma like; "0,0,1"
- no explanation

'''
{report here}
'''

⭐⭐⭐

---

## Prompt <br>Engernignering

- B - Background
- A - Ask
- R - Role
- R - Restriction

---

### Example

#### 為蜥蜴寫詩

- 寫一首跟蜥蜴有關的五言絕句

石上蜥蜴曬，
靜臥日光斜。
金鱗閃爍美，
獨享暖陽華。

- 修改一下，最後要說這個蜥蜴跟龍很像

石縫蜥蜴曬，
日暖金身輝。
悠然似龍游，
影繞竹林飛。

- 強調蜥蜴動作很快

石隙蜥影閃，
日光鱗閃煌。
跳躍似龍形，
忽隱又忽揚。

---

### Tips

- Domain Priming:
  - **Be like a...**,
  - **on macos**,
  - **use python**, by **R**
- Sequential Prompting:
  - Specify the steps required to perform a task
- Delimiters to distinguish the data from the prompt.
  - good: **` " '**
  - bad: **/ : \ < >**

```text
'''
{text here}
'''
```

---

## Ask for Structured Output

### As Markdown format

#### The result of chatGPT is markdown based

```markdown
# h1

## h2

- list

* list as well

| H1     | to   |
| ------ | ---- |
| Google | Bard |
```

---

⭐⭐⭐⭐

- **JSON**

```json
{
  "id": "12345",
  "name": "John Doe",
  "age": 30,
  "gender": "Male",
  "bloodType": "A+"
}
```

- **CSV**

```txt
id,12345
name,John Doe
age,30
gender,Male
bloodType,A+
```

- if not found then return **N/A**

---

## Keywords

- **transmit** the output of process A to process B for further analysis.
- don't **making up nonexistent** information.
- **truncate** the message to fit within the character limit.
- present it in a markdown styled **bulleted list**.
- **iterate** through all items to ensure each one meets the required criteria.
- **chronologically**
- **For each** ...
- If ... then ... else ...

---

### Give successful examples of completing tasks then ask

- e.g. 0980701 will become be 20090701 then format as 2009-07-01

---

<!-- _footer: '' -->

### Chain-of-Thought Prompting

![Figure: width:550px](https://i.imgur.com/m1H0Mpe.png)

- 小明 6 歲，哥哥 9 歲，小明 10 歲時，哥哥幾歲

> WEI, Jason, et al. Chain-of-thought prompting elicits reasoning in large language models. Advances in Neural Information Processing Systems, 2022, 35: 24824-24837.

---

<!-- _footer: '' -->

### Step-Back Prompting 🙋

![Figure: width:550px](https://i.imgur.com/5vxT8fl.png)

- Before you start, please ask me any questions you have about this so I can give you more context. Be extremely comprehensive.

> ZHENG, Huaixiu Steven, et al. Take a step back: evoking reasoning via abstraction in large language models. arXiv preprint arXiv:2310.06117, 2023.

---

## Resource for Prompting 🍲

- [ChatGPT AI Prompt Generator | AI Mind](https://www.aimind.so/prompt-generator)
- [ChatGPT 指令大全｜ExplainThis](https://www.explainthis.io/zh-hant/chatgpt)
- [f/awesome-chatgpt-prompts: This repo includes ChatGPT prompt curation to use ChatGPT better.](https://github.com/f/awesome-chatgpt-prompts)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [LangSmith](https://smith.langchain.com/)
- [ChatGPT Prompt Engineering for Developers - DeepLearning.AI](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)
- [最好的 AI 導航站和 AI 工具列表 - Toolify](https://www.toolify.ai/zh/)

---

# In Research

---

## For lit review

Role: Clinician
Goal: Summarize the content in bullet points according to the following rules:

1. Use markdown-style bullet points: "- text..."
2. Keep each point to less than 80 words.
3. Use descriptive yet concise language.
4. Avoid overly verbose language and fillers.
5. Add an H2 title and H3 subtitle.

⭐

---

## Read Clinical Trial, MD

- As a oncologist reading journal about a clinical trial, in the following format:

1. Design: Trial phase, II, III, or an meta-analysis, single center or multi-center, randomized or not, or open-label or blind, etc.
2. number of patients, patients characteristics
3. agent: medication use in this trial
4. NCTId Number: e.g.NCTXXXXXXXX
5. compare two group in markdown table
   esp. Progression-free survival (PFS), Overall survival (OS) and Response rate (RR)
   {YOUR_ABSTRACT_HERE}

⭐⭐

---

## Clinical Trial, to json

- As a oncologist reading journal about a clinical trial, in the following format into json dictionary:

![Figure: height:500px](https://i.imgur.com/wxsgRm5.png)

---

## Create a search strategy

- create a pubmed search term about "renal cell carcinoma"
- I want it less than 5 years
- clincial trial only
- return search query for me

![Figure: width:550px](https://i.imgur.com/4hJGq6g.png)

---

## For clinical Research

- 請幫我生產一組資料，是一種疾病叫語言模型幻覺，分成兩組，有接受 GPT 治療跟沒接受，其他相關資料包括 ≡ 性別、年紀、存活時間 （單位是月） ，在這組資料中，請讓有接受 GPT 的病人整體存活時間較長，但可以 ✔ 增加 ↑ 一點隨機性，最後提供給我 csv 下載連結
- 產生 kaplan meier curve，
- 有治療對上沒治療

![Figure: height:350px](https://i.imgur.com/wHSuet4.png)

---

## Write Abstract

- 這個疾病是一種疾病叫語言模型幻覺，分成兩組，有接受 GPT 治療跟沒接受，其他相關資料包括 ≡ 性別、年紀、存活時間 （單位是月） ，請重寫，具體一點，包含重要的統計數據在 results 裡
- language_model_illusion_study.csv 裡面有你要的數據，請分析它
- 根據您提供的具體數據，寫一份研究摘要

---

# Openai API

- [GPT - OpenAI API](https://platform.openai.com/docs/guides/gpt/function-calling)
- [Sider -- ChatGPT Sidebar, GPT-4, Draw & Web access](https://sider.ai/)
- [Chatbox 官網 - 辦公學習的 AI 好助手，官方免費下載](https://chatboxai.app/zh-TW)
- [GPT for Sheets™ and Docs™ - Google Workspace Marketplace](https://workspace.google.com/marketplace/app/gpt_for_sheets_and_docs/677318054654)

---

## API in python

![Figure: width:550px](https://i.imgur.com/FHhBVy4.png)

---

## Response from a POST request

### Json 格式

```json
{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1677858242,
  "model": "gpt-3.5-turbo-1106",
  "usage": {
    "prompt_tokens": 13,
    "completion_tokens": 7,
    "total_tokens": 20
  },
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "\n\nThis is a test!"
      },
      "finish_reason": "stop",
      "index": 0
    }
  ]
}
```

---

## batch process csv data

```python
system_content ='你是一個生態專家'
user_prompt = "介紹一下這個動物："
def process_csv_row(row, column_name, system_contnet, user_prompt):
    try:
        processed_text = process_text(row[column_name], system_contnet, user_prompt)
        return processed_text
    except Exception as e:
        print(f"An error occurred while processing row: {e}")
        return None
```

---

# Thank you for your time and attention

## _Have a nice day_
