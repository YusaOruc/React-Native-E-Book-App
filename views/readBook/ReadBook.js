import React, { useState, useRef, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { ViewComponent } from "../../components/ViewComponent";
import { TextComponent } from "../../components/TextComponent";
import * as Progress from "react-native-progress";
import BookItem from "../../components/BookItem";

const dummyData = [
  {
    sayfaNo: 1,
    text: `
  C H A P T E R O N E
  ’ll be your date to the wedding.”
  Words I had never—not even in my wildest dreams, and
  trust me, I had a vivid imagination—conceived of hearing
  from that deep and rich tone reached my ears.
  Looking down at my coffee, I squinted my eyes, trying to search for any
  signs of noxious substances floating around. That would at least explain what
  was happening. But nope.
  Nothing. Just what was left of my Americano.
  “I’ll do it if you need someone that badly,” the deep voice came again.
  Eyes growing wide, I lifted my head. I opened my mouth and then
  snapped it closed again.
  “Rosie …” I trailed off, the word leaving me in a whisper. “Is he really
  there? Can you see him? Or did someone spike my coffee without me
  noticing?”
  Rosie—my best friend and colleague in InTech, the New York City–
  based engineering consulting company, where we had met and worked—
  slowly nodded her head. I watched her dark curls bounce with the motion, an
  expression of disbelief marring her otherwise soft features. She lowered her
  voice. “Nope. He’s right there.” Her head peeked around me very quickly.
  “Hi. Good morning!” she said brightly before her attention returned to my
  face. “Right behind you.”
  Lips parted, I stared at my friend for a long moment. We were standing at
  the far end of the hallway of the eleventh floor of the InTech headquarters.
  Both our offices were relatively close together, so the moment I had entered
  --------------------------------------------------------------------`,
  },
  {
    sayfaNo: 2,
    text: `
  I had gone straight to her office.
  My plan had been to grab Rosie and plop down on the upholstered
  wooden armchairs that served as a waiting sitting area for visiting clients,
  which were usually unoccupied this early in the morning. But we never made
  it. I somehow dropped the bomb before we ever sat down. That was how
  much my predicament needed Rosie’s immediate attention. And then … then
  he had materialized out of nowhere.
  “Should I repeat that a third time?” His question sent a new wave of
  disbelief rushing down my body, freezing the blood in my veins.
  He wouldn’t. Not because he couldn’t, but because what he was saying
  did not make any freaking sense. Not in our world. One where we—
  “All right, fine,” he sighed. “You can take me.” He paused, sending more
  of that ice-cold wariness through me. “To your sister’s wedding.”
  My spine locked up.
  My shoulders stiffened.
  I even felt the satin blouse I had tucked into my camel slacks stretch with
  the sudden motion.
  I can take him.
  To my sister’s wedding.
  As my … date?
  I blinked, his words echoing inside my head.
  Then, something unhitched inside of me. The absurdity of whatever this
  was—whatever perverse joke this man I knew not to trust was trying to pull
  off—made a snort bubble its way up my throat and reach my lips, leaving me
  quickly and loudly. As if it had been in a rush to get out.
  A grunt came from behind me. “What’s so funny?” His voice dropped,
  turning colder. “I’m completely serious.”
  I bit back another burst of laughter. I didn’t believe that. Not for a second.
  “The chances of him,” I told Rosie, “being actually serious are the same
  chances I have of having Chris Evans pop out of nowhere and confess his
  undying love for me.” I made a show of looking right and left. “Nonexistent.
  So, Rosie, you were saying something about … Mr. Frenkel, right?”
  There was no Mr. Frenkel.
  “Lina,” Rosie said with that fake, toothy smile I knew she wore when she
  didn’t want to be rude. “He looks like he’s serious,” she spoke through her
  freaky smile. Her gaze inspected the man standing behind me. “Yep. I think
  he might be serious. ---------------------------------------------------------------------”`,
  },
  {
    sayfaNo: 3,
    text: `
  “333333333333333333still refusing to turn around and
  acknowledge that there was a possibility my friend was right.
  There couldn’t be. There was no way Aaron Blackford, colleague and
  well-established affliction of mine, would even attempt to offer something
  like that. No. Way.
  An impatient sigh came from behind me. “This is getting repetitive,
  Catalina.” A long pause. Then, another noisy exhale left his lips, this one
  much longer. But I did not turn around. I held my ground. “Ignoring me
  won’t make me disappear. You know that.”
  I did. “But that doesn’t mean I won’t keep trying,” I muttered under my
  breath.
  Rosie leveled me with a look. Then, she peeked around me again, keeping
  that toothy grin in place. “Sorry about that, Aaron. We are not ignoring you.”
  Her grin strained. “We are … debating something.”
  “We are ignoring him though. You don’t need to spare his feelings. He
  doesn’t have any.”
  “Thanks, Rosie,” Aaron told my friend, some of the usual coldness
  leaving his voice. Not that he’d be nice to anybody. Nice wasn’t something
  Aaron did. I didn’t even think he was able to pull off friendly. But he had
  always been less … grim when it came to Rosie. A treatment that had never
  been for me. “Do you think you can tell Catalina to turn around? I’d
  appreciate talking to her face and not to the back of her head.” His tone
  dropped back to minus zero degrees. “That is, of course, if this is not one of
  her jokes that I never seem to understand, much less find funny.”
  Heat rushed up my body, reaching my face.
  “Sure,” Rosie complied. “I think … I think I can do that.” My friend’s
  gaze bounced from that point behind me to my face, her eyebrows raised.
  “Lina, so, erm, Aaron would like you to turn around if this is not one of those
  jokes that—”
  “Thanks, Rosie. I got that,” I gritted out between my teeth. Feeling my
  cheeks burn, I refused to face him. That would mean letting him win
  whatever game he was playing. Plus, he had just called me unfunny. Him. “If
  you could, tell Aaron that I don’t think one can laugh at, or much less
  understand, jokes when one lacks a sense of humor, please. That would be
  great. Thanks.”
  Rosie scratched the side of her head, looking pleadingly at me. Don’t
  make me do this, she seemed to ask me with her eyes.`,
  },
  {
    sayfaNo: 4,
    text: "dafas4d",
  },
  {
    sayfaNo: 5,
    text: "dafas5d",
  },
  {
    sayfaNo: 6,
    text: "dafa6sd",
  },
  {
    sayfaNo: 7,
    text: `
  “Nope. He can’t be.” I shook my head, still refusing to turn around and
  acknowledge that there was a possibility my friend was right.
  There couldn’t be. There was no way Aaron Blackford, colleague and
  well-established affliction of mine, would even attempt to offer something
  like that. No. Way.
  An impatient sigh came from behind me. “This is getting repetitive,
  Catalina.” A long pause. Then, another noisy exhale left his lips, this one
  much longer. But I did not turn around. I held my ground. “Ignoring me
  won’t make me disappear. You know that.”
  I did. “But that doesn’t mean I won’t keep trying,” I muttered under my
  breath.
  Rosie leveled me with a look. Then, she peeked around me again, keeping
  that toothy grin in place. “Sorry about that, Aaron. We are not ignoring you.”
  Her grin strained. “We are … debating something.”
  “We are ignoring him though. You don’t need to spare his feelings. He
  doesn’t have any.”
  “Thanks, Rosie,” Aaron told my friend, some of the usual coldness
  leaving his voice. Not that he’d be nice to anybody. Nice wasn’t something
  Aaron did. I didn’t even think he was able to pull off friendly. But he had
  always been less … grim when it came to Rosie. A treatment that had never
  been for me. “Do you think you can tell Catalina to turn around? I’d
  appreciate talking to her face and not to the back of her head.” His tone
  dropped back to minus zero degrees. “That is, of course, if this is not one of
  her jokes that I never seem to understand, much less find funny.”
  Heat rushed up my body, reaching my face.
  “Sure,” Rosie complied. “I think … I think I can do that.” My friend’s
  gaze bounced from that point behind me to my face, her eyebrows raised.
  “Lina, so, erm, Aaron would like you to turn around if this is not one of those
  jokes that—”
  “Thanks, Rosie. I got that,” I gritted out between my teeth. Feeling my
  cheeks burn, I refused to face him. That would mean letting him win
  whatever game he was playing. Plus, he had just called me unfunny. Him. “If
  you could, tell Aaron that I don’t think one can laugh at, or much less
  understand, jokes when one lacks a sense of humor, please. That would be
  great. Thanks.”
  Rosie scratched the side of her head, looking pleadingly at me. Don’t
  make me do this, she seemed to ask me with her eyes.`,
  },
  {
    sayfaNo: 8,
    text: `
  “Nope. He can’t be.” I shook my head, still refusing to turn around and
  acknowledge that there was a possibility my friend was right.
  There couldn’t be. There was no way Aaron Blackford, colleague and
  well-established affliction of mine, would even attempt to offer something
  like that. No. Way.
  An impatient sigh came from behind me. “This is getting repetitive,
  Catalina.” A long pause. Then, another noisy exhale left his lips, this one
  much longer. But I did not turn around. I held my ground. “Ignoring me
  won’t make me disappear. You know that.”
  I did. “But that doesn’t mean I won’t keep trying,” I muttered under my
  breath.
  Rosie leveled me with a look. Then, she peeked around me again, keeping
  that toothy grin in place. “Sorry about that, Aaron. We are not ignoring you.”
  Her grin strained. “We are … debating something.”
  “We are ignoring him though. You don’t need to spare his feelings. He
  doesn’t have any.”
  “Thanks, Rosie,” Aaron told my friend, some of the usual coldness
  leaving his voice. Not that he’d be nice to anybody. Nice wasn’t something
  Aaron did. I didn’t even think he was able to pull off friendly. But he had
  always been less … grim when it came to Rosie. A treatment that had never
  been for me. “Do you think you can tell Catalina to turn around? I’d
  appreciate talking to her face and not to the back of her head.” His tone
  dropped back to minus zero degrees. “That is, of course, if this is not one of
  her jokes that I never seem to understand, much less find funny.”
  Heat rushed up my body, reaching my face.
  “Sure,” Rosie complied. “I think … I think I can do that.” My friend’s
  gaze bounced from that point behind me to my face, her eyebrows raised.
  “Lina, so, erm, Aaron would like you to turn around if this is not one of those
  jokes that—”
  “Thanks, Rosie. I got that,” I gritted out between my teeth. Feeling my
  cheeks burn, I refused to face him. That would mean letting him win
  whatever game he was playing. Plus, he had just called me unfunny. Him. “If
  you could, tell Aaron that I don’t think one can laugh at, or much less
  understand, jokes when one lacks a sense of humor, please. That would be
  great. Thanks.”
  Rosie scratched the side of her head, looking pleadingly at me. Don’t
  make me do this, she seemed to ask me with her eyes.`,
  },
  {
    sayfaNo: 9,
    text: `
  “aaaaaaa my head, still refusing to turn around and
  acknowledge that there was a possibility my friend was right.
  There couldn’t be. There was no way Aaron Blackford, colleague and
  well-established affliction of mine, would even attempt to offer something
  like that. No. Way.
  An impatient sigh came from behind me. “This is getting repetitive,
  Catalina.” A long pause. Then, another noisy exhale left his lips, this one
  much longer. But I did not turn around. I held my ground. “Ignoring me
  won’t make me disappear. You know that.”
  I did. “But that doesn’t mean I won’t keep trying,” I muttered under my
  breath.
  Rosie leveled me with a look. Then, she peeked around me again, keeping
  that toothy grin in place. “Sorry about that, Aaron. We are not ignoring you.”
  Her grin strained. “We are … debating something.”
  “We are ignoring him though. You don’t need to spare his feelings. He
  doesn’t have any.”
  “Thanks, Rosie,” Aaron told my friend, some of the usual coldness
  leaving his voice. Not that he’d be nice to anybody. Nice wasn’t something
  Aaron did. I didn’t even think he was able to pull off friendly. But he had
  always been less … grim when it came to Rosie. A treatment that had never
  been for me. “Do you think you can tell Catalina to turn around? I’d
  appreciate talking to her face and not to the back of her head.” His tone
  dropped back to minus zero degrees. “That is, of course, if this is not one of
  her jokes that I never seem to understand, much less find funny.”
  Heat rushed up my body, reaching my face.
  “Sure,” Rosie complied. “I think … I think I can do that.” My friend’s
  gaze bounced from that point behind me to my face, her eyebrows raised.
  “Lina, so, erm, Aaron would like you to turn around if this is not one of those
  jokes that—”
  “Thanks, Rosie. I got that,” I gritted out between my teeth. Feeling my
  cheeks burn, I refused to face him. That would mean letting him win
  whatever game he was playing. Plus, he had just called me unfunny. Him. “If
  you could, tell Aaron that I don’t think one can laugh at, or much less
  understand, jokes when one lacks a sense of humor, please. That would be
  great. Thanks.”
  Rosie scratched the side of her head, looking pleadingly at me. Don’t
  make me do this, she seemed to ask me with her eyes.`,
  },
  {
    sayfaNo: 10,
    text: `
  “ccccccshook my head, still refusing to turn around and
  acknowledge that there was a possibility my friend was right.
  There couldn’t be. There was no way Aaron Blackford, colleague and
  well-established affliction of mine, would even attempt to offer something
  like that. No. Way.
  An impatient sigh came from behind me. “This is getting repetitive,
  Catalina.” A long pause. Then, another noisy exhale left his lips, this one
  much longer. But I did not turn around. I held my ground. “Ignoring me
  won’t make me disappear. You know that.”
  I did. “But that doesn’t mean I won’t keep trying,” I muttered under my
  breath.
  Rosie leveled me with a look. Then, she peeked around me again, keeping
  that toothy grin in place. “Sorry about that, Aaron. We are not ignoring you.”
  Her grin strained. “We are … debating something.”
  “We are ignoring him though. You don’t need to spare his feelings. He
  doesn’t have any.”
  “Thanks, Rosie,” Aaron told my friend, some of the usual coldness
  leaving his voice. Not that he’d be nice to anybody. Nice wasn’t something
  Aaron did. I didn’t even think he was able to pull off friendly. But he had
  always been less … grim when it came to Rosie. A treatment that had never
  been for me. “Do you think you can tell Catalina to turn around? I’d
  appreciate talking to her face and not to the back of her head.” His tone
  dropped back to minus zero degrees. “That is, of course, if this is not one of
  her jokes that I never seem to understand, much less find funny.”
  Heat rushed up my body, reaching my face.
  “Sure,” Rosie complied. “I think … I think I can do that.” My friend’s
  gaze bounced from that point behind me to my face, her eyebrows raised.
  “Lina, so, erm, Aaron would like you to turn around if this is not one of those
  jokes that—”
  “Thanks, Rosie. I got that,” I gritted out between my teeth. Feeling my
  cheeks burn, I refused to face him. That would mean letting him win
  whatever game he was playing. Plus, he had just called me unfunny. Him. “If
  you could, tell Aaron that I don’t think one can laugh at, or much less
  understand, jokes when one lacks a sense of humor, please. That would be
  great. Thanks.”
  Rosie scratched the side of her head, looking pleadingly at me. Don’t
  make me do this, she seemed to ask me with her eyes.`,
  },
];

const ReadBook = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [sayfaNo, setSayfaNo] = useState(4);

  const [firstFocusDone, setFirstFocusDone] = useState(false);
  const [pageLoad, setPageLoad] = useState(false);
  const flatListRef = useRef(null);

  useEffect(() => {
    if (pageLoad) return;
    loadPages();
  }, [pageLoad]);

  useEffect(() => {
    if (firstFocusDone) return;
    focusToPage();
  }, [data, firstFocusDone]);

  const loadPages = () => {
    setLoading(true);
    // İstenilen sayfa numarasına kadar olan sayfaları filtrele
    const filteredData = dummyData.filter((item) => item.sayfaNo <= sayfaNo);
    // 1 saniye gecikmeyle verileri güncelle
    setTimeout(() => {
      setData(filteredData);
      setLoading(false);
    }, 1000);

    setPageLoad(true); // setPageLoad(true)
    setTimeout(() => {
      focusToPage();
    }, 1000);
  };

  const focusToPage = () => {
    const index = data.findIndex((item) => item.sayfaNo === sayfaNo);
    if (index !== -1) {
      flatListRef.current.scrollToIndex({ index: index, animated: true });
      setFirstFocusDone(true);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <ViewComponent style={{ padding: 10 }}>
        <TextComponent>{item.text}</TextComponent>
      </ViewComponent>
    );
  };

  const keyExtractor = (item) => item.sayfaNo.toString();

  const getItemLayout = (_, index) => ({
    length: 500, // Assuming each page has height 500
    offset: 500 * index,
    index,
  });

  const loadMoreData = () => {
    if (!loading) {
      //setLoading(true);
      // Simüle edilen bir asenkron veri yükleme işlemi
      setTimeout(() => {
        const nextPage = data.length + 1; // Bir sonraki sayfa numarası
        const newData = dummyData.find((item) => item.sayfaNo === nextPage);
        if (newData) {
          setData((prevData) => [...prevData, newData]);
        }
        //setLoading(false);
      }, 1000);
    }
  };

  return (
    <ViewComponent style={{ flex: 1 }}>
      <ViewComponent style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
          ListFooterComponent={() =>
            loading ? <ActivityIndicator size="large" color="#D45555" /> : null
          }
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
          ListHeaderComponent={
            <View
              style={{
                alignItems: "center",
              }}
            >
              <BookItem
                item={{
                  path: require("../../assets/bookIcons/d.png"),
                  name: "Pride and Prejudice",
                  author: "Jane Austen",
                }}
              />
            </View>
          }
        />
      </ViewComponent>
      <ViewComponent style={{ ...styles.progress }}>
        <Progress.Bar
          progress={(data.length * 1) / 100}
          width={200}
          color="#D45555"
        />
      </ViewComponent>
    </ViewComponent>
  );
};

export default ReadBook;
const styles = StyleSheet.create({
  progress: {
    flex: 0.01,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
});
