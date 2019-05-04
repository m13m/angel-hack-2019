import requests 
from bs4 import BeautifulSoup
from selenium import webdriver
from bs4 import BeautifulSoup
import getpass
import requests
from selenium.webdriver.common.keys import Keys
import pprint
def score(url_github,lang,url_linkedin):
    #url1="https://github.com/kpulkit29"
    url1=url_github
    URL = url1+"?utf8=?&tab=repositories&q=&type=source&language="
    r = requests.get(URL) 
    soup = BeautifulSoup(r.text)
    score=0
    for i in soup.findAll('a',attrs={'class':'UnderlineNav-item'}):
        if i!=None:
            if i.text!=None:
                if 'TAB_FOLLOWERS' in str(i): 
                    if i.find('span',attrs={'class':'Counter'})!=None:
                        score=score+int(i.find('span',attrs={'class':'Counter'}).text)
    table = soup.find('div', attrs = {'id':'user-repositories-list'}) 

    for i in table.findAll('div',attrs={'class':'col-9 d-inline-block'}):
        if i.find('span', attrs = {'itemprop':'programmingLanguage'})!=None:
            language=i.find('span', attrs = {'itemprop':'programmingLanguage'})
            #print(language.text)
            if language.text==lang:
                score=score+1
                #print(score)
                if i.find('a',attrs={'class':'muted-link mr-3'})!=None:
                    start=i.find('a',attrs={'class':'muted-link mr-3'})
                    #print(start.text)
                    score=score+int(start.text)*5


    URL = url1+"?tab=overview"
    r = requests.get(URL) 
    soup = BeautifulSoup(r.text)
    w=soup.find('div',attrs={'class':'js-yearly-contributions'})
    if w.find('h2',attrs={'class':'f4 text-normal mb-2'})!=None:
        contri=w.find('h2',attrs={'class':'f4 text-normal mb-2'})
        contri=(contri.text)
        contri=contri[6:]
        contri=contri.replace('  ','')
        contri=contri.split()
        #print(contri)
        contri=int(contri[0])
        score=score+int(contri/5)
    pic=soup.find('img',attrs={'class':'avatar width-full rounded-2'})
    if(pic['src']!=None):
        pic=pic['src']
    else:
        pic=0
    
    
    
    chrome_path = r'C:\Users\gulat\Downloads\chromedriver_win32 (2)\chromedriver.exe'
    driver = webdriver.Chrome(chrome_path)
    driver.get(url_linkedin)
    q=(driver.find_elements_by_class_name('date-range__duration-bullet'))
    titles = [x.text for x in q]
    for i in range(len(titles)):
        if 'yrs' in titles[i]:
            q=titles[i].split()
            score=score+int(q[0])*12
            score=score+q[2]
        else:
            q=titles[i].split()
            score=score+int(q[0])
    return score,pic

#score("https://github.com/kpulkit29","Python",'https://www.linkedin.com/in/pulkit-kashyap-974b6b124/')