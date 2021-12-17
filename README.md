# GSE---TEAM-A

## Structure

```

```

## Usage of Data

Data that is used for the functionality in this repository (e.g. *.csv files) should be placed within the directory ./resources that is ignored by git.

The used datasets are currently hosted on <https://faubox.rrze.uni-erlangen.de/getlink/fi7Pkx8JBpiQbcF7azE85W32/> within the directory __dataset__ and have to be downloaded __manually__ and placed within the __resources__ directory (Currently, you have to create this directory manually).

### Data description

```csv
,count,hate_speech,offensive_language,neither,class,tweet
0,3,0,0,3,2,!!! RT @mayasolovely: As a woman you shouldn't complain about cleaning up your house. &amp; as a man you should always take the trash out...
1,3,0,3,0,1,!!!!! RT @mleew17: boy dats cold...tyga dwn bad for cuffin dat hoe in the 1st place!!
2,3,0,3,0,1,!!!!!!! RT @UrKindOfBrand Dawg!!!! RT @80sbaby4life: You ever fuck a bitch and she start to cry? You be confused as shit
3,3,0,2,1,1,!!!!!!!!! RT @C_G_Anderson: @viva_based she look like a tranny
4,6,0,6,0,1,!!!!!!!!!!!!! RT @ShenikaRoberts: The shit you hear about me might be true or it might be faker than the bitch who told it to ya &#57361;
5,3,1,2,0,1,"!!!!!!!!!!!!!!!!!!""@T_Madison_x: The shit just blows me..claim you so faithful and down for somebody but still fucking with hoes! &#128514;&#128514;&#128514;"""
6,3,0,3,0,1,"!!!!!!""@__BrighterDays: I can not just sit up and HATE on another bitch .. I got too much shit going on!"""
```

The data are stored as a CSV containing 5 columns [—see more](https://github.com/t-davidson/hate-speech-and-offensive-language):

- `count` = number of CrowdFlower users who coded each tweet (min is 3, sometimes more users coded a tweet when judgments were determined to be unreliable by CF).
- `hate_speech` = number of CF users who judged the tweet to be hate speech.
- `offensive_language` = number of CF users who judged the tweet to be offensive.
- `neither` = number of CF users who judged the tweet to be neither offensive nor non-offensive.
- `class` = class label for majority of CF users.
    0 - hate speech
    1 - offensive  language
    2 - neither
