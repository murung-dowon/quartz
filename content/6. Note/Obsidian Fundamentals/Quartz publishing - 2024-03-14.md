---
tags:
  - Obsidian
  - Infra
aliases:
  - Obsidian
  - Infra
type: Note
summary: false
created: 2024-03-14
reviewed:
---
### Topic:: [[3. Subject/Obsidian Fundamentals]]
**Previous Note** : [[]]

- - -
## Quartz Settings 

### 1. Authoring Content
글 작성하고 퍼블리싱하는 방법

#### Syntax
```
--- 
title: Example Title
draft: false
tags:
  - example-tag
---
 ```

- `title`: Title of the page. If it isn’t provided, Quartz will use the name of the file as the title.
- `description`: Description of the page used for link previews.
- `aliases`: Other names for this note. This is a list of strings.
- `tags`: Tags for this note.
- `draft`: Whether to publish the page or not. This is one way to make 
- `date`: A string representing the day the note was published. Normally uses `YYYY-MM-DD` format.

#### Publishing
- `npx quartz sync` : ==A command for syncing & publishing==  

### [2. Configuration](https://quartz.jzhao.xyz/configuration)
- base-url : 가장 기본이 되는 url로 처음 접속 시 표시하는 링크.
  
- typography : https://fonts.google.com/
	- 위 링크에서 지원되는 폰트 확인하여 적용 
	  
- plug-ins : https://quartz.jzhao.xyz/tags/plugin
	- [ ] 플러그인 확인 후 설정해주기 #Obsidian

### [3. Hosting](https://quartz.jzhao.xyz/hosting)
- Cloudflare을 활용한 호스팅
- Tracking은 Goatcounter 사용

- - -
## Tasks


- - -
## Notes
